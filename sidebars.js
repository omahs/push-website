/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // pushdevSidebar: [
  //   {
  //     type: "doc",
  //     id: "dev/developer-hub",
  //     label: "Developer Hub",
  //   },
  //   {
  //     type: "category",
  //     label: "Push Chat",
  //     collapsed: true,
  //     items: [
  //       { type: "autogenerated", dirName: "dev/chat" }
  //     ]
  //   }
  // ],
  pushNotificationSidebar: [
    {
      type: 'doc',
      id: 'notifications/notifications',
    },
    {
      type: 'doc',
      id: 'notifications/docs-notifications-quickstart',
    },
    {
      type: 'category',
      label: 'Build',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-build-section',
      },
      collapsed: false,
      items: [{ type: 'autogenerated', dirName: 'notifications/build' }],
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-tutorials-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'notifications/tutorials' }],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-concepts-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'notifications/concepts' }],
    },
  ],
  pushChatSidebar: [
    {
      type: 'doc',
      id: 'chat/chat',
    },
    {
      type: 'doc',
      id: 'chat/docs-chat-quickstart',
    },
    {
      type: 'category',
      label: 'Build',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-build-section',
      },
      collapsed: false,
      items: [{ type: 'autogenerated', dirName: 'chat/build' }],
    },
    {
      type: 'category',
      label: 'Message Types',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-message-types-section',
      },
      collapsed: false,
      items: [{ type: 'autogenerated', dirName: 'chat/message-types' }],
    },
    {
      type: 'category',
      label: 'UI Components',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-ui-components-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'chat/ui-components' }],
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-tutorials-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'chat/tutorials' }],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-concepts-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'chat/concepts' }],
    },
  ],
}
module.exports = sidebars
