import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Link } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';
import { NewPanel } from './NewPanel';

export const Home = ({ id, fetchedUser }) => {
  const { photo_200, city, first_name, last_name } = { ...fetchedUser };
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader>Моя главная</PanelHeader>
      {fetchedUser && (
        <Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
          <Cell before={photo_200 && <Avatar src={photo_200} />} subtitle={city?.title}>
            {`${first_name} ${last_name}`}
          </Cell>
        </Group>
      )}

      <Group header={<Header mode="secondary">Navigation Example</Header>}>
        <Div>
          <Button stretched size="l" mode="secondary" onClick={() => routeNavigator.push('persik')}>
            Покажите Персика, пожалуйста!
          </Button>
          <Link onClick={() =>  routeNavigator.push('NewPanel')}> НОВАЯ ПАНЕЛЬ</Link>
        </Div>
      </Group>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};
