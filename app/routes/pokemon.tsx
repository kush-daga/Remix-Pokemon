import { Outlet } from 'remix';

export default function Pokemon() {
  return (
    <div>
      Pokemon Page - <br />
      <Outlet />
    </div>
  );
}
