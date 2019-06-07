import React, { useContext } from 'react';

import pluginId from '../../pluginId';

import CustomLink from '../../components/CustomLink';
import DocumentationSection from '../../components/DocumentationSection';
import MenuContext from '../../containers/MenuProvider';
import NavMenu from '../../components/NavMenu';

const getSectionTitle = (itemsTitle, models) => {
  const base = `${pluginId}.menu.section.${itemsTitle}.name.`;

  return models.length > 1 ? `${base}plural` : `${base}singular`;
};

const displayNotificationCTNotSaved = () =>
  strapi.notification.info(
    `${pluginId}.notification.info.contentType.creating.notSaved`
  );

function Menu() {
  const { canOpenModal, groups, models, push } = useContext(MenuContext);

  const handleClickOpenModalCreateCT = type => {
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
      customLink: (
        <CustomLink onClick={() => handleClickOpenModalCreateCT('model')} />
      ),
    },
    {
      title: 'groups',
      titleId: getSectionTitle('groups', models),
      links: groups,
      customLink: (
        <CustomLink onClick={() => handleClickOpenModalCreateCT('group')} />
      ),
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
