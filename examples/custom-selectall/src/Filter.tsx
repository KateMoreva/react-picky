import * as React from 'react';
export type FilterProps = {
  onFilterChange(term: string): void;
  onFilterClear(): void;
  onResetFilterAndSelected(): void;
  tabIndex: number | undefined;
  placeholder?: string;
} & React.RefAttributes<HTMLInputElement>;

class Filter extends React.PureComponent<FilterProps> {
  ref = React.createRef<HTMLInputElement>();
  static displayName = 'Picky(Filter)';

  static defaultProps = {
    placeholder: 'Filter...',
  };

  EMPTY = '';

  render() {
    const {
      placeholder,
      tabIndex,
      onFilterChange,
      onFilterClear,
      onResetFilterAndSelected,
    } = this.props;
    return (
      <div className="picky__header">
        <div className="picky__filter">
          <input
            ref={this.ref}
            type="text"
            className="picky__filter__input"
            data-testid="picky__filter__input"
            placeholder={placeholder}
            tabIndex={tabIndex}
            aria-label="filter options"
            onChange={e => {
              onFilterChange(e.target.value);
            }}
          />
          <button
            type="button"
            className="picky__clear"
            onClick={() => {
              onFilterClear();
              if (this.ref.current !== null) {
                this.ref.current.value = this.EMPTY;
              }
            }}
          >
            X
          </button>
        </div>
        <span
          className="picky__reset"
          onClick={() => {
            onResetFilterAndSelected();
          }}
        >
          reset filters
        </span>
      </div>
    );
  }

  //   (
  //     { placeholder, tabIndex, onFilterChange },
  //     ref: React.Ref<HTMLInputElement>
  //   ) => {
  //     return (
  //       <div className="picky__filter">
  //         <input
  //           ref={ref}
  //           type="text"
  //           className="picky__filter__input"
  //           data-testid="picky__filter__input"
  //           placeholder={placeholder}
  //           tabIndex={tabIndex}
  //           aria-label="filter options"
  //           onChange={e => onFilterChange(e.target.value)}
  //         />
  //       </div>
  //     );
  //   }
  // )
}

export { Filter };
