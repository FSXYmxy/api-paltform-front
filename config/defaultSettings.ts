import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  "navTheme": "light",
  "layout": "side",
  "contentWidth": "Fluid",
  "fixedHeader": false,
  "fixSiderbar": true,
  "colorPrimary": "#1677FF",
  "splitMenus": false,
  "logo": "/mylogo.jpg",
  "title": "API开放平台（完善中）"
};

export default Settings;
