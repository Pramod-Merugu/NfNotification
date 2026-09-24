"use strict";(self.webpackChunkcustomcomp=self.webpackChunkcustomcomp||[]).push([[74661818],{421:(e,s,n)=>{n.r(s),n.d(s,{default:()=>p});var a=n(594),l=n(388);const i=n(267).Ay.div`
  .nl-popup {
    position: fixed;
    top: 16px;
    right: 16px;
    width: 360px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.16);
    border-radius: 6px;
    padding: 0;
    background: #ffffff;
    z-index: 9999;
    border: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    animation: nl-fade-in 240ms ease;
  }

  /* left accent and header */
  .nl-popup .nl-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 12px 8px 12px;
    background: linear-gradient(90deg, rgba(7,97,196,0.06), transparent 40%);
  }

  .nl-popup .nl-icon {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    background: #e8f0ff;
    color: #0b63d6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }

  .nl-popup .nl-title {
    font-weight: 600;
    color: #111827;
    font-size: 14px;
    flex: 1;
  }

  .nl-popup .nl-close {
    background: transparent;
    border: none;
    color: #6b7280;
    font-size: 14px;
    cursor: pointer;
    padding: 6px;
    border-radius: 4px;
  }

  .nl-popup .nl-close:hover {
    background: rgba(0,0,0,0.03);
  }

  .nl-popup .nl-body {
    padding: 8px 12px 12px 12px;
    background: #fff;
  }

  .nl-popup .nl-field {
    display: flex;
    gap: 8px;
    align-items: baseline;
    margin-bottom: 6px;
    font-size: 13px;
    color: #374151;
  }

  .nl-popup .nl-field .nl-label {
    color: #6b7280;
    min-width: 72px;
    font-size: 12px;
  }

  .nl-popup .nl-message {
    background: #f6f8fb;
    padding: 10px;
    border-radius: 4px;
    font-size: 13px;
    color: #111827;
    margin-top: 6px;
  }

  .nl-popup .nl-actions {
    display: flex;
    gap: 8px;
    margin-top: 10px;
  }

  .nl-popup .nl-open-btn {
    background: #0b63d6;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
  }

  .nl-popup .nl-open-btn:hover {
    background: #0959b8;
  }

  @keyframes nl-fade-in {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;var o=n(848);const p=(0,l.A)(function(e){const{getPConnect:s,subscriptionMatcher:n="NF_NOTIFICATION"}=e,l=s(),[p,c]=(0,a.useState)({visible:!1});return(0,a.useEffect)(()=>{const e=e=>{console.log("receivedData",e);const s=e?.message??e,n=s?.pzinskey||s?.caseKey||s?.caseId||"",a=s?.caseId||s?.caseKey||"";(n||a)&&c({visible:!0,caseId:a,pzinskey:n,caseClass:s?.caseClass||"",message:s?.messageText||s?.message||s?.text||""}),console.log("payload",s)};try{const s={matcher:n,criteria:{criteriaKey:n}};console.log("subscriptionMatcher",n);const a=PCore.getMessagingServiceManager&&PCore.getMessagingServiceManager();if(a&&a.subscribe){const n=a.subscribe(s,e);return()=>a.unsubscribe(n)}}catch{}},[s,n]),console.log("popup",p),(0,o.jsx)(i,{children:p.visible&&(0,o.jsxs)("div",{className:"nl-popup",role:"status","aria-live":"polite",children:[(0,o.jsxs)("div",{className:"nl-header",children:[(0,o.jsx)("div",{className:"nl-icon","aria-hidden":!0,children:"N"}),(0,o.jsx)("div",{className:"nl-title",children:"Notification"}),(0,o.jsx)("button",{className:"nl-close",type:"button",onClick:()=>c({visible:!1}),"aria-label":"Close",children:"×"})]}),(0,o.jsxs)("div",{className:"nl-body",children:[(0,o.jsxs)("div",{className:"nl-field",children:[(0,o.jsx)("div",{className:"nl-label",children:"Case ID:"}),(0,o.jsx)("div",{className:"nl-value",children:p.caseId})]}),(0,o.jsxs)("div",{className:"nl-field",children:[(0,o.jsx)("div",{className:"nl-label",children:"pzInsKey:"}),(0,o.jsx)("div",{className:"nl-value",children:p.pzinskey})]}),(0,o.jsx)("div",{className:"nl-field",children:(0,o.jsx)("div",{className:"nl-label",children:"Message:"})}),(0,o.jsx)("div",{className:"nl-message",children:p.message}),(0,o.jsx)("div",{className:"nl-actions",children:(0,o.jsx)("button",{className:"nl-open-btn",type:"button",onClick:()=>((e,s)=>{if(e){try{console.log("pzinskey",e),console.log("caseClass",s),l.getActionsApi().openWorkByHandle(e,s)}catch{}c({visible:!1})}})(p.pzinskey,p.caseClass),children:"Open case"})})]})]})})})}}]);
//# sourceMappingURL=NN4001_Nf_NFComponent_LaunchNotification.e4af9da8.js.map