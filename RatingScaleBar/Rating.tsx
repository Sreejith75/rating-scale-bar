import * as React from 'react';

export interface IRatingProps {
  value: number;
  scale: "5" | "10";
  defaultValue?: number;
  onChange: (value: number) => void;
}

export class Rating extends React.Component<IRatingProps, { selectedValue: number }> {
  constructor(props: IRatingProps) {
    super(props);
    this.state = {
      selectedValue: props.value ?? props.defaultValue ?? 0
    };
  }

  componentDidUpdate(prevProps: IRatingProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ selectedValue: this.props.value });
    }
  }

  private handleClick = (value: number) => {
    this.setState({ selectedValue: value });
    this.props.onChange(value);
  };

  private getColor = (index: number, max: number): string => {
    const ratio = index / max;
    if (ratio <= 0.33) return '#ff0000'; // red
    if (ratio <= 0.66) return '#ffff00'; // yellow
    return '#00ff00'; // green
  };


  public render(): React.ReactNode {
    const { scale } = this.props;
    const { selectedValue } = this.state;
    const max = parseInt(scale);
    const points = Array.from({ length: max }, (_, i) => i + 1);
    const fillPercentage = (selectedValue / max) * 100;

    return (
      <div className="rating-container">
        <div className="rating-bar">
          <div className="rating-fill" style={{ width: `${fillPercentage}%` }}></div>
          {points.map((point, index) => (
            <div
              key={point}
              className="rating-cell"
              style={{ left: `${(index / max) * 100}%`, width: `${100 / max}%` }}
              onClick={() => this.handleClick(point)}
              aria-label={`Rate ${point} out of ${max}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  this.handleClick(point);
                }
              }}
            >
              <span className="cell-number">{point}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}