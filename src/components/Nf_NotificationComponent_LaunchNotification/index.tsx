import React, { useEffect, useState } from 'react';
import { withConfiguration } from '@pega/cosmos-react-core';
import type { PConnFieldProps } from '../shared/PConnProps';
import StyledLaunchNotificationWrapper from './styles';

declare let PCore: any;

interface LaunchNotificationProps extends PConnFieldProps {
  subscriptionMatcher?: string;
}

function LaunchNotification(props: LaunchNotificationProps) {
  const { getPConnect, subscriptionMatcher = 'NF_NOTIFICATION' } = props;
  const pConnect = getPConnect();
  const requestor = PCore.getEnvironmentInfo().getOperatorIdentifier()?.toUpperCase();

  const [popup, setPopup] = useState<{
    visible: boolean;
    caseId?: string;
    pzinskey?: string;
    caseClass?: string;
    message?: string;
  }>({
    visible: false
  });

  useEffect(() => {
   
    const handler = (receivedData: any) => {
      console.log('receivedData', receivedData);
      const payload = receivedData?.message ?? receivedData;
      const pzinskey = payload?.pzinskey;
      const caseId = payload?.caseId;
      const caseClass = payload?.caseClass || '';
      const message = payload?.message || '';
      if (pzinskey || caseId) {
        setPopup({ visible: true, caseId, pzinskey, caseClass, message });
      }
      console.log('payload', payload);
    };
    
    try {
      const filter = {
      matcher: subscriptionMatcher,
      criteria: {
        Requestor: requestor
      }
    };
      console.log('subscriptionMatcher', subscriptionMatcher);
      const mgr = PCore.getMessagingServiceManager && PCore.getMessagingServiceManager();
      if (mgr && mgr.subscribe) {
        const subId = mgr.subscribe(filter, handler);
        return () => mgr.unsubscribe(subId);
      }
    } catch {
      // ignore
    }
  }, [getPConnect, subscriptionMatcher]);

  const openCase = (pzinskey?: string, caseClass?: string) => {
    if (!pzinskey) return;
    try {
      console.log('pzinskey', pzinskey);
      console.log('caseClass', caseClass);
      pConnect.getActionsApi().openWorkByHandle(pzinskey, caseClass );
    } catch {
      // ignore
    }
    setPopup({ visible: false });
  };

  console.log('popup', popup);
  return (
    <StyledLaunchNotificationWrapper>
      {popup.visible && (
        <div className='nl-popup' role='status' aria-live='polite'>
          <div className='nl-header'>
            <div className='nl-icon' aria-hidden>
              Notification
            </div>
            <div align="right" style={{ flex: 1 }}>
            <button className='nl-close' type='button' onClick={() => setPopup({ visible: false })} aria-label='Close'>
              ×
            </button> 
            </div>
          </div>
          <div className='nl-body'>
            <div className='nl-field'>
              <div className='nl-label'>Case ID:</div>
              <div className='nl-message'>{popup.caseId}</div>
            </div>
            <div className='nl-field'>
              <div className='nl-label'>Message:</div>
              <div className='nl-message'>{popup.message}</div>
            </div>
            
            <div className='nl-actions'>
              <button
                className='nl-open-btn'
                type='button'
                onClick={() => openCase(popup.pzinskey, popup.caseClass)}
              >
                Open case
              </button>
            </div>
          </div>
        </div>
      )}
    </StyledLaunchNotificationWrapper>
  );
}

export default withConfiguration(LaunchNotification);
