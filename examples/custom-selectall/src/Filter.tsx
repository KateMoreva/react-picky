import * as React from 'react';
export type FilterProps = {
  onFilterChange(term: string): void;
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

  clearInput = () => {
    console.log(this);
    if (this.ref.current != null) {
      this.ref.current.value = '';
    }
    return this.setState({
      filtered: false,
      filteredOptions: [],
    });
  };

  render() {
    const { placeholder, tabIndex, onFilterChange } = this.props;
    return (
      <div className="picky__filter">
        <input
          ref={this.ref}
          type="text"
          className="picky__filter__input"
          data-testid="picky__filter__input"
          placeholder={placeholder}
          tabIndex={tabIndex}
          aria-label="filter options"
          onChange={e => onFilterChange(e.target.value)}
        />
        <button type="button" className="clearSearch" onClick={this.clearInput}>
          X
        </button>
        <span>reset all</span>
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
