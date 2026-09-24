
/* eslint-disable react/jsx-no-useless-fragment */
import type { Meta, StoryObj } from '@storybook/react';

import NfNfComponentLaunchNotification from './index';


import configProps from './mock';

const meta: Meta<typeof NfNfComponentLaunchNotification> = {
  title: 'NfNfComponentLaunchNotification',
  component: NfNfComponentLaunchNotification,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof NfNfComponentLaunchNotification>;

if (!window.PCore) {
  window.PCore = {} as any;
}

if (!window.PCore.getEnvironmentInfo) {
  window.PCore.getEnvironmentInfo = () => ({
    getOperatorIdentifier: () => 'storybook-user'
  });
}

const worklistData = {
  data: {
    data: [
      {
        pxProcessName: 'Loan',
        pxRefObjectInsName: ' A-8002',
        pyAssignmentStatus: 'New',
        pxTaskLabel: 'Details'
      },
      {
        pxProcessName: 'Loan',
        pxRefObjectInsName: ' A-7001',
        pyAssignmentStatus: 'Open',
        pxTaskLabel: 'Info'
      },
      {
        pxProcessName: 'Loan',
        pxRefObjectInsName: ' A-9000',
        pyAssignmentStatus: 'Open',
        pxTaskLabel: 'Amount'
      }
    ]
  }
};

export const BaseNfNfComponentLaunchNotification: Story = (args: any) => {

  window.PCore.getDataApiUtils = () => {
    return {
      getData: () => {
        return new Promise(resolve => {
          // @ts-ignore
          resolve(worklistData);
        });
      },
      getDataAsync: () => {
        return new Promise(resolve => {
          // @ts-ignore
          resolve(worklistData);
        });
      }
    } as any;
  };

  const props = {
    ...configProps,
    getPConnect: () => {
      return {
        getValue: (value: any) => {
          return value;
        },
        getContextName: () => {
          return 'app/primary_1';
        },
        getLocalizedValue: (value: any) => {
          return value;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: () => {
              /* nothing */
            },
            triggerFieldChange: () => {
              /* nothing */
            }
          };
        },
        ignoreSuggestion: () => {
          /* nothing */
        },
        acceptSuggestion: () => {
          /* nothing */
        },
        setInheritedProps: () => {
          /* nothing */
        },
        resolveConfigProps: () => {
          /* nothing */
        }
      };
    }
  };

  // Mock messaging service manager so Storybook can trigger notifications
  if (!window.PCore.getMessagingServiceManager) {
    const mgr: any = {
      _handler: null,
      subscribe: function (filter: any, handler: any) {
        this._handler = handler;
        return 'storybook-sub';
      },
      unsubscribe: function (id: any) {
        this._handler = null;
      },
      publish: function (payload: any) {
        if (this._handler) {
          this._handler({ message: payload });
        }
      }
    };
    window.PCore.getMessagingServiceManager = () => mgr;
  }

  // ensure openWorkByHandle exists to avoid runtime errors when clicking Open case
  const originalGetPConnect = props.getPConnect;
  const pconnectWrapper = () => {
    const pc = originalGetPConnect();
    const actions = pc.getActionsApi();
    actions.openWorkByHandle = actions.openWorkByHandle || ((pz, cls) => {
      // noop for storybook
      // eslint-disable-next-line no-console
      console.log('openWorkByHandle called', pz, cls);
    });
    return { ...pc, getActionsApi: () => actions };
  };

  const wrappedProps = { ...props, getPConnect: pconnectWrapper };

  return (
    <>
      <div style={{ marginBottom: 12 }}>
        <button
          type='button'
          onClick={() => {
            const mgr = window.PCore.getMessagingServiceManager && window.PCore.getMessagingServiceManager();
            mgr && mgr.publish({ pzinskey: 'PZ-123', caseId: 'A-1001', message: 'Storybook test notification' });
          }}
        >
          Send test notification
        </button>
      </div>
      <NfNfComponentLaunchNotification {...wrappedProps} {...args} />
    </>
  );
};

BaseNfNfComponentLaunchNotification.args = {
  header: configProps.header,
  description: configProps.description,
  whatsnewlink: configProps.whatsnewlink,
  datasource: configProps.datasource,
};
