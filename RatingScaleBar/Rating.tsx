import * as React from 'react';

export interface IRatingProps {
  value: number;
  scale: "5" | "10";
  defaultValue?: number;
  reset?: boolean;
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
    if (prevProps.reset !== this.props.reset && this.props.reset) {
      this.setState({ selectedValue: 0 });
      this.props.onChange(0);
    }
  }

  private handleClick = (value: number) => {
    this.setState({ selectedValue: value });
    this.props.onChange(value);
  };

  private getGradient = (selectedValue: number, max: number): string => {
    if (selectedValue === 0) return 'transparent';

    const ratio = selectedValue / max;

    // Create smooth progressive gradient with even color transitions
    const stops = [];

    // Always start with red
    stops.push('#ff0000 0%');

    if (ratio <= 0.2) {
      stops.push('#ff2222 20%', '#ff4444 40%', '#ff6666 60%', '#ff8888 80%', '#ffaaaa 100%');
    } else if (ratio <= 0.4) {
      stops.push('#ff2200 15%', '#ff4400 30%', '#ff6600 45%', '#ff8800 60%', '#ffaa00 75%', '#ffcc00 90%', '#ffee00 100%');
    } else if (ratio <= 0.6) {
      stops.push('#ff4400 12%', '#ff6600 25%', '#ff8800 37%', '#ffaa00 50%', '#ffcc00 62%', '#ffee00 75%', '#ffff00 87%', '#ddff00 100%');
    } else if (ratio <= 0.8) {
      stops.push('#ff6600 10%', '#ff8800 20%', '#ffaa00 30%', '#ffcc00 40%', '#ffee00 50%', '#ffff00 60%', '#ddff00 70%', '#bbff00 80%', '#99ff00 90%', '#77ff00 100%');
    } else {
      stops.push('#ff8800 8%', '#ffaa00 16%', '#ffcc00 25%', '#ffee00 33%', '#ffff00 41%', '#ddff00 50%', '#bbff00 58%', '#99ff00 66%', '#77ff00 75%', '#55ff00 83%', '#33ff00 91%', '#00ff00 100%');
    }

    return `linear-gradient(to right, ${stops.join(', ')})`;
  };


  public render(): React.ReactNode {
    try {
      const { scale } = this.props;
      const { selectedValue } = this.state;
      const max = parseInt(scale) || 10; // Default to 10 if parsing fails
      const points = Array.from({ length: max }, (_, i) => i + 1);
      const fillPercentage = Math.min((selectedValue / max) * 100, 100); // Ensure max 100%

      return (
        <div className="rating-container">
          <div className="rating-bar">
            <div className="rating-fill" style={{ width: `${fillPercentage}%`, background: this.getGradient(selectedValue, max) }}></div>
            {points.map((point, index) => (
              <div
                key={point}
                className="rating-cell"
                style={{
                  left: `${(index / max) * 100}%`,
                  width: `${100 / max}%`,
                  position: 'absolute',
                  top: 0,
                  height: '100%'
                }}
                onClick={() => this.handleClick(point)}
                aria-label={`Rate ${point} out of ${max}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
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
    } catch (error) {
      console.error('Rating component render error:', error);
      return <div style={{ padding: '10px', color: 'red' }}>Error rendering rating component</div>;
    }
  }
}