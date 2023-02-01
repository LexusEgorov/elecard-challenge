import { Link } from 'react-router-dom';

type PaginationElementProps = {
  to: string,
  children: string | number,
  disabled?: boolean,
  active?: boolean,
}

function PaginationElement({to, children, disabled, active} : PaginationElementProps) : JSX.Element {
  let className = 'pagination-element ';

  if(disabled){
    className += 'pagination-element-disabled';
  }

  if(active){
    if(disabled){
      className.replace('disabled', 'active');
    } else {
      className += 'pagination-element-active';
    }
  }
  
  return (
    <Link
      to={to}
      className={className}
    >
      {children}
    </Link>
  );
}

export default PaginationElement;
