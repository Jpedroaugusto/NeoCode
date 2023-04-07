import { MouseEventHandler } from 'react';

type LinkProps = {
  link: string;
  legend: string;
  handleClick: MouseEventHandler<HTMLAnchorElement> | any;
};

function Link({ link, legend, handleClick }: LinkProps): JSX.Element {
  return (
    <a href={link} onClick={handleClick}>
      {legend}
    </a>
  );
}

export default Link;
