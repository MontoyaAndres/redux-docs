// Components
import Home from '../app/components/Home';
import About from '../app/components/About';

// Containers
import Blog from '../app/components/Blog';

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About,
    exact: true
  },
  {
    path: '/blog',
    component: Blog
  }
];
