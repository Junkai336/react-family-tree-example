import React, { memo, useCallback } from 'react';
import classNames from 'classnames';
import { Relations } from './Relations';
import css from './NodeDetails.module.css';

export const NodeDetails = memo(
  function NodeDetails({ node, className, onSelect, onHover, onClear }) {
    const closeHandler = useCallback(() => onSelect(undefined), [onSelect]);

    return (
      <section className={classNames(css.root, className)}>
        <header className={css.header}>
          <h3 className={css.title}>{node.id}</h3>
          <button className={css.close} onClick={closeHandler}>&#10005;</button>
        </header>
        <Relations
          node={node}
          onSelect={onSelect}
          onHover={onHover}
          onClear={onClear}
          title="Parents"
          items={node.parents}
        />
        <Relations
          node={node}
          onSelect={onSelect}
          onHover={onHover}
          onClear={onClear}
          title="Children"
          items={node.children}
        />
        <Relations
          node={node}
          onSelect={onSelect}
          onHover={onHover}
          onClear={onClear}
          title="Siblings"
          items={node.siblings}
        />
        <Relations
          node={node}
          onSelect={onSelect}
          onHover={onHover}
          onClear={onClear}
          title="Spouses"
          items={node.spouses}
        />
      </section>
    );
  },
);
