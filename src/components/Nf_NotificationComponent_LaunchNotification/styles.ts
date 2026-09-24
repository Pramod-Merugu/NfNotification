import styled from 'styled-components';

const StyledLaunchNotificationWrapper = styled.div`
  .nl-popup {
    position: fixed;
    top: 50px;
    right: 18px;
    width: 380px;
    max-width: calc(100% - 36px);
    box-shadow: 0 14px 38px rgba(2, 6, 23, 0.18), inset 0 -1px 0 rgba(255,255,255,0.02);
    border-radius: 10px;
    padding: 0;
    background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
    z-index: 99999;
    border: 1px solid rgba(11, 99, 214, 0.06);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    animation: nl-fade-in 260ms cubic-bezier(.2,.9,.2,1);
    transform-origin: top right;
  }

  .nl-popup::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    background: linear-gradient(180deg, #0b63d6 0%, #0560b2 100%);
  }

  .nl-progress {
    height: 4px;
    width: 100%;
    background: rgba(11,99,214,0.12);
  }

  .nl-progress > i {
    display: block;
    height: 100%;
    background: linear-gradient(90deg,#0b63d6,#2b9cf0);
    width: 100%;
    transform-origin: left center;
    animation: nl-progress 6s linear forwards;
  }

  @keyframes nl-progress {
    from { transform: scaleX(1); }
    to { transform: scaleX(0); }
  }

  .nl-popup .nl-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0px 14px 0px 7px;
    background: #00ffff;
    font-weight: bold;
    font-size: 15px;
    color: #0f1724;
  }

  .nl-popup .nl-icon {
    width: 144px;
    height: 44px;
    border-radius: 8px;
    background: linear-gradient(180deg,#e8f3ff,#d6ebff);
    color: #054f9e;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    box-shadow: 0 2px 6px rgba(3, 40, 85, 0.06);
    flex-shrink: 0;
  }

  .nl-popup .nl-title {
    font-weight: 600;
    color: #0f1724;
    font-size: 15px;
    line-height: 1;
    flex: 1;
  }

  .nl-popup .nl-close {
    background: transparent;
    border: none;
    color: #6b7280;
    font-size: 18px;
    cursor: pointer;
    padding: 6px;
    border-radius: 6px;
    transition: background .12s ease, color .12s ease;
  }

  .nl-popup .nl-close:hover {
    background: rgba(2,6,23,0.04);
    color: #111827;
  }

  .nl-popup .nl-body {
    padding: 10px 16px 16px 16px;
    background: transparent;
  }

  .nl-popup .nl-field {
    display: flex;
    gap: 12px;
    align-items: baseline;
    margin-bottom: 8px;
    font-size: 13px;
    color: #374151;
  }

  .nl-popup .nl-field .nl-label {
    color: #6b7280;
    min-width: 76px;
    font-size: 12px;
    font-weight: bold;
  }

  .nl-popup .nl-field .nl-value {
    color: #6b7280;
    min-width: 76px;
    font-size: 12px;
    font-weight: bold;
  }

  .nl-popup .nl-message {
    background: linear-gradient(180deg,#f8fbff,#f5f8ff);
    padding: 12px;
    border-radius: 6px;
    font-size: 13px;
    color: #0f1724;
    margin-top: 6px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
    white-space: normal;
  }

  .nl-popup .nl-actions {
    display: flex;
    gap: 8px;
    margin-top: 12px;
  }

  .nl-popup .nl-open-btn {
    background: linear-gradient(180deg,#0b63d6,#0959b8);
    color: #fff;
    border: none;
    padding: 9px 14px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    box-shadow: 0 6px 18px rgba(11,99,214,0.12);
  }

  .nl-popup .nl-open-btn:hover {
    transform: translateY(-1px);
  }

  @keyframes nl-fade-in {
    from { opacity: 0; transform: translateY(-8px) scale(.99); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @media (max-width: 480px) {
    .nl-popup { left: 12px; right: 12px; width: auto; top: 12px; }
    .nl-popup .nl-title { font-size: 14px; }
    .nl-popup .nl-icon { width: 36px; height: 36px; }
  }
`;

export default StyledLaunchNotificationWrapper;