import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '@storybook/addon-console';
import './index.css';

function loadStories() {
    require('../_stories/');
}

const storyWrapper = story => <div style={{ margin: 35 }}>{story()}</div>;

addDecorator(
    withInfo({
        inline: true,
        header: false,
        source: true,
        maxPropsIntoLine: 1
    })
);

addDecorator(
    withOptions({
        name: 'Sony Living Component Guide',
        url: 'https://www.playstation.com/en-in/',
        goFullScreen: false,
        showStoriesPanel: true,
        showAddonPanel: true,
        showSearchBox: false,
        addonPanelInRight: false,
        sortStoriesByKind: true,
        sidebarAnimations:true,
        enableShortcuts:true
    })
);

addDecorator(storyWrapper);
addDecorator(checkA11y);

const newViewports = {
    kindleFire2: {
      name: 'Kindle Fire 2',
      styles: {
        width: '600px',
        height: '963px'
      }
    },
    kindleFireHD: {
      name: 'Kindle Fire HD',
      styles: {
        width: '533px',
        height: '801px'
      }
    }
  };
  
  configureViewport({
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports
    }
  });

configure(loadStories, module);
