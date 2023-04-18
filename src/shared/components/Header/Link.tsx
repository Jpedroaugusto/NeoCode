import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

type LinkProps = {
  link: string;
  legend: string;
  handleClick: MouseEventHandler<HTMLAnchorElement> | any;
};

function vanillaLink({ link, legend, handleClick }: LinkProps): JSX.Element {
  return (
    <Link to={link} onClick={handleClick}>
      {legend}
    </Link>
  );
}

export default vanillaLink;
