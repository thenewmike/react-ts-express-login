import { TeamOutlined, LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Space, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../../features/auth/authSlice';
import { CustomButton } from '../custom-button';
import style from './index.module.css';

export const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Layout.Header className={style.header}>
      <Space>
        <TeamOutlined className={style.teamIcon} />
        <Link to="/">
          <CustomButton type="primary">
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      {user ? (
        <CustomButton type="primary" icon={<LogoutOutlined />} onClick={onLogoutClick}>
          Выйти
        </CustomButton>
      ) : (
        <Space>
          <Link to="/register">
            <CustomButton type="primary" icon={<UserOutlined />}>
              Зарегистрироваться
            </CustomButton>
          </Link>
          <Link to="/login">
            <CustomButton type="primary" icon={<LoginOutlined />}>
              Войти
            </CustomButton>
          </Link>
        </Space>
      )}
    </Layout.Header>
  );
};
