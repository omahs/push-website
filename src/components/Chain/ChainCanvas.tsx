import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Matter from 'matter-js';
import { device } from '@site/src/config/globals';
import { useInView } from 'react-intersection-observer';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

const COLORS = ['#4B75FF', '#FC564A', '#2EC780', '#E3B92D', '#E492FF'];

const TAGS = [
  'gaming',
  'nft',
  'social',
  'consumer apps',
  'defi',
  'infrastructure',
  'dao',
  'messaging',
  'blockchain',
];

export default function ChainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine>();
  const renderRef = useRef<Matter.Render>();
  const [ref, inView] = useInView({ threshold: 1.0 });
  const isMobile = useMediaQuery(device.mobileL);
  const [displayedTags, setDisplayedTags] = useState<string[]>(TAGS);

  const updateTagsForScreenSize = () => {
    if (isMobile) {
      setDisplayedTags(TAGS.slice(0, 6)); // Show only 6 tags on mobile and tablets
    } else {
      setDisplayedTags(TAGS); // Show all tags on larger screens
    }
  };

  useEffect(() => {
    updateTagsForScreenSize(); // Initial update on component mount

    // Resize listener
    const handleResize = () => {
      updateTagsForScreenSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!inView) return; // Exit early if not in view

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;

    // Create engine
    const engine = Engine.create();
    engineRef.current = engine;

    // Create renderer
    const render = Render.create({
      canvas: canvasRef.current!,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
      },
    });
    renderRef.current = render;

    // Create walls
    const walls = [
      Bodies.rectangle(window.innerWidth / 2, -10, window.innerWidth, 20, {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }),
      Bodies.rectangle(
        window.innerWidth / 2,
        window.innerHeight + 10,
        window.innerWidth,
        20,
        {
          isStatic: true,
          render: { fillStyle: 'transparent' },
        }
      ),
      Bodies.rectangle(-10, window.innerHeight / 2, 20, window.innerHeight, {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }),
      Bodies.rectangle(
        window.innerWidth + 10,
        window.innerHeight / 2,
        20,
        window.innerHeight,
        {
          isStatic: true,
          render: { fillStyle: 'transparent' },
        }
      ),
    ];

    const paddingX = 21; // Horizontal padding
    const paddingY = 12; // Vertical padding
    const fontSize = 45;

    // Create tags
    const tags = displayedTags.map((tag, index) => {
      const ctx = document.createElement('canvas').getContext('2d')!;
      ctx.font = `${fontSize}px N27`;
      const textWidth = ctx.measureText(tag).width;

      // const width = Math.max(textWidth + paddingX * 2, 150);
      const width = Math.max(textWidth + paddingX * 2);
      const height = fontSize + paddingY * 2;

      const x = Math.random() * (window.innerWidth - width) + width / 2;
      const y = Math.random() * (window.innerHeight - height) + height / 2;

      return Bodies.rectangle(x, y, width, height, {
        chamfer: { radius: 32 },
        render: {
          fillStyle: COLORS[index % COLORS.length],
          strokeStyle: '#000',
          lineWidth: 8,
        },
        restitution: 0.5,
        friction: 0.1,
        label: tag,
      });
    });

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    // Add all bodies to the world
    World.add(engine.world, [...walls, ...tags, mouseConstraint]);

    // Create the runner
    const runner = Matter.Runner.create();

    // Start the engine and renderer
    Matter.Runner.run(runner, engine); // Use the runner to manage the engine
    Matter.Render.run(render); // Start the renderer

    // Add text overlay
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    Matter.Events.on(render, 'afterRender', () => {
      ctx.font = '400 45px N27';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#FFFFFF';

      tags.forEach((tag) => {
        ctx.save();
        ctx.translate(tag.position.x, tag.position.y);
        ctx.rotate(tag.angle);
        ctx.fillText(tag.label, 0, 0); // Centered text
        ctx.restore();
      });
    });

    // Handle resize
    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
      Matter.Body.setPosition(
        walls[0],
        Matter.Vector.create(window.innerWidth / 2, -10)
      );
      Matter.Body.setPosition(
        walls[1],
        Matter.Vector.create(window.innerWidth / 2, window.innerHeight + 10)
      );
      Matter.Body.setPosition(
        walls[3],
        Matter.Vector.create(window.innerWidth + 10, window.innerHeight / 2)
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [inView, displayedTags]); // Only re-run when inView or displayedTags change

  return (
    <Wrapper ref={ref}>
      <StyledCanvas ref={canvasRef} />
    </Wrapper>
  );
}

// Styled components
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// Styled canvas element
const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  touch-action: none;
  z-index: 10;
  padding: 10px 88px;

  @media ${device.mobileL} {
    padding: 10px 28px;
  }
`;
