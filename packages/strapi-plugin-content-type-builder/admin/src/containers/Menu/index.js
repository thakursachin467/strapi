import React, { useContext } from 'react';
import pluginId from '../../pluginId';

import MenuContext from '../../containers/MenuProvider';

import NavMenu from '../../components/NavMenu';
import DocumentationSection from '../../components/DocumentationSection';
import CustomLink from '../../components/CustomLink';

const getSectionTitle = (itemsTitle, models) => {
  const base = `${pluginId}.menu.section.${itemsTitle}.name.`;

  /* istanbul ignore if */
  return models.length > 1 ? `${base}plural` : `${base}singular`;
};

const displayNotificationCTNotSaved = () =>
  strapi.notification.info(`${pluginId}.notification.info.contentType.creating.notSaved`);

function Menu() {
  const { models, groups, canOpenModal, history } = useContext(MenuContext);

  const handleClickOpenModalCreateCT = type => {
    const { push } = history;

    if (canOpenModal) {
      push({
        search: `modalType=${type}&settingType=base&actionType=create`,
      });
    } else {
      displayNotificationCTNotSaved();
    }
  };

  const menuItems = [
    {
      title: 'models',
      titleId: getSectionTitle('contentTypeBuilder', models),
      links: models,
      customLink: <CustomLink onClick={() => handleClickOpenModalCreateCT('model')} />,
    },
    {
      title: 'groups',
      titleId: getSectionTitle('groups', models),
      links: groups,
      customLink: <CustomLink onClick={() => handleClickOpenModalCreateCT('group')} />,
    },
    {
      title: 'documentation',
      titleId: `${pluginId}.menu.section.documentation.name`,
      links: <DocumentationSection />,
    },
  ];

  return <NavMenu menuItems={menuItems} />;
}

export default Menu;
export { getSectionTitle };
