import React from 'react';
import pluginId from '../../pluginId';

import { useMenu } from '../../containers/MenuProvider';

import NavMenu from '../../components/NavMenu';
import DocumentationSection from '../../components/DocumentationSection';
import CustomLink from '../../components/CustomLink';

function Menu() {
  const { models, groups, canOpenModal, history } = useMenu();

  const getSectionTitle = itemsTitle => {
    const base = `${pluginId}.menu.section.${itemsTitle}.name.`;

    /* istanbul ignore if */
    return models.length > 1 ? `${base}plural` : `${base}singular`;
  };

  const displayNotificationCTNotSaved = () =>
    strapi.notification.info(`${pluginId}.notification.info.contentType.creating.notSaved`);

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
      titleId: getSectionTitle('contentTypeBuilder'),
      links: models,
      customLink: <CustomLink onClick={() => handleClickOpenModalCreateCT('model')} />,
    },
    {
      title: 'groups',
      titleId: getSectionTitle('groups'),
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
