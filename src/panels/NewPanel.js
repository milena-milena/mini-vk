import { Group, Panel, PanelHeader, PanelHeaderBack, } from '@vkontakte/vkui';
import {Icon20GiftCircleFillRed} from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';


export const NewPanel = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
        Новая панель
      </PanelHeader>
   <Group>
   <Icon20GiftCircleFillRed />
   </Group>
    </Panel>
  );
};

NewPanel.propTypes = {
  id: PropTypes.string.isRequired,
};
