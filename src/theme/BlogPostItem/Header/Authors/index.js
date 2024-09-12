/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import BlogPostItemHeaderAuthor from '@theme/BlogPostItem/Header/Author';
import styles from './styles.module.css';
// Component responsible for the authors layout
export default function BlogPostItemHeaderAuthors({ className }) {
  const {
    metadata: { authors },
    assets,
  } = useBlogPost();
  const authorsCount = authors.length;
  if (authorsCount === 0) {
    return null;
  }
  const imageOnly = authors.every(({ name }) => !name);
  return (
    <div
      className={clsx(
        'margin-top--md margin-bottom--sm',
        imageOnly ? styles.imageOnlyAuthorRow : 'row',
        className
      )}
    >
      {authors.map((author, idx) => (
        <div
          className={clsx(
            !imageOnly && 'col col--6',
            imageOnly ? styles.imageOnlyAuthorCol : styles.authorCol
          )}
          key={idx}
        >
          <BlogPostItemHeaderAuthor
            index={idx}
            author={{
              ...author,
              // Handle author images using relative paths
              imageURL: assets.authorsImageUrls[idx] ?? author.imageURL,
            }}
          />
        </div>
      ))}
    </div>
  );
}
