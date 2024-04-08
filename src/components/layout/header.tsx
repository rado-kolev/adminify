import { Layout, Space } from 'antd';
import CurrentUser from './curent-user';

const Header = () => {
  const headerStyles: React.CSSProperties = {
    background: '#fff',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 999,
  };
  return (
    <Layout.Header style={headerStyles}>
      <Space align='center' size='middle'>
        <CurrentUser />
      </Space>
    </Layout.Header>
  );
};

export default Header;
