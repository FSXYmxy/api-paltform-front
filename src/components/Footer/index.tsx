// import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import {GithubOutlined} from "@ant-design/icons";
const Footer: React.FC = () => {
  const defaultMessage = 'by孟祥越';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear}${defaultMessage}`}
      links={[
        // {
        //   key: 'API开放平台',
        //   title: 'API开放平台',
        //   href: 'http://localhost:8101/api/doc.html',
        //   blankTarget: true,
        // },
        // {
        //   key: 'github',
        //   title: <GithubOutlined />,
        //   href: 'https://github.com/ant-design/ant-design-pro',
        //   blankTarget: true,
        // },
        // {
        //   key: 'Ant Design',
        //   title: 'Ant Design',
        //   href: 'https://ant.design',
        //   blankTarget: true,
        // },
      ]}
    />
  );
};
export default Footer;
