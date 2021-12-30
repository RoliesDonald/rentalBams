(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[34],{276:function(e,t,n){"use strict";var c=n(20),r=n.n(c),a=n(26),o=n.n(a),i=n(7),l=n.n(i),s=(n(8),n(277),["children","className","headingLevel"]);t.a=function(e){var t=e.children,n=e.className,c=e.headingLevel,a=o()(e,s),i=l()("wc-block-components-title",n),u="h".concat(c);return React.createElement(u,r()({className:i},a),t)}},277:function(e,t){},280:function(e,t){},281:function(e,t){},282:function(e,t,n){"use strict";var c=n(1);t.a=function(e){var t=e.defaultTitle,n=void 0===t?Object(c.__)("Step",'woocommerce'):t,r=e.defaultDescription,a=void 0===r?Object(c.__)("Step description text.",'woocommerce'):r,o=e.defaultShowStepNumber;return{title:{type:"string",default:n},description:{type:"string",default:a},showStepNumber:{type:"boolean",default:void 0===o||o}}}},284:function(e,t){},290:function(e,t,n){"use strict";var c=n(7),r=n.n(c),a=(n(8),n(276)),o=(n(280),function(e){var t=e.title,n=e.stepHeadingContent;return React.createElement("div",{className:"wc-block-components-checkout-step__heading"},React.createElement(a.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!n&&React.createElement("span",{className:"wc-block-components-checkout-step__heading-content"},n))});t.a=function(e){var t=e.id,n=e.className,c=e.title,a=e.legend,i=e.description,l=e.children,s=e.disabled,u=void 0!==s&&s,d=e.showStepNumber,b=void 0===d||d,p=e.stepHeadingContent,f=void 0===p?function(){}:p,m=a||c?"fieldset":"div";return React.createElement(m,{className:r()(n,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":b,"wc-block-components-checkout-step--disabled":u}),id:t,disabled:u},!(!a&&!c)&&React.createElement("legend",{className:"screen-reader-text"},a||c),!!c&&React.createElement(o,{title:c,stepHeadingContent:f()}),React.createElement("div",{className:"wc-block-components-checkout-step__container"},!!i&&React.createElement("p",{className:"wc-block-components-checkout-step__description"},i),React.createElement("div",{className:"wc-block-components-checkout-step__content"},l)))}},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n(8);var c=n(171),r=(n(281),function(e){var t=e.errorMessage,n=void 0===t?"":t,r=e.propertyName,a=void 0===r?"":r,o=e.elementId,i=void 0===o?"":o,l=Object(c.b)(),s=l.getValidationError,u=l.getValidationErrorId;if(!n||"string"!=typeof n){var d=s(a)||{};if(!d.message||d.hidden)return null;n=d.message}return React.createElement("div",{className:"wc-block-components-validation-error",role:"alert"},React.createElement("p",{id:u(i)},n))})},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var c=n(5),r=n.n(c),a=n(26),o=n.n(a),i=n(2),l=n(0),s=n(65),u=n(57),d=["email"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}var p=function(){var e=Object(s.b)().needsShipping,t=Object(u.b)(),n=t.billingData,c=t.setBillingData,a=t.shippingAddress,p=t.setShippingAddress,f=t.shippingAsBilling,m=t.setShippingAsBilling,g=Object(l.useRef)(f),h=Object(l.useRef)(n),O=Object(l.useCallback)((function(e){p(e),f&&c(e)}),[f,p,c]),v=Object(l.useCallback)((function(t){c(t),e||p(t)}),[e,p,c]);Object(l.useEffect)((function(){if(g.current!==f){if(f)h.current=n,c(a);else{var e=h.current,t=(e.email,o()(e,d));c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t))}g.current=f}}),[f,c,a,n]);var j=Object(l.useCallback)((function(e){c({email:e})}),[c]),w=Object(l.useCallback)((function(e){c({phone:e})}),[c]),k=Object(l.useCallback)((function(e){O({phone:e})}),[O]);return{defaultAddressFields:i.defaultAddressFields,shippingFields:a,setShippingFields:O,billingFields:n,setBillingFields:v,setEmail:j,setPhone:w,setShippingPhone:k,shippingAsBilling:f,setShippingAsBilling:m,showShippingFields:e,showBillingFields:!e||!g.current}}},322:function(e,t,n){"use strict";var c=n(20),r=n.n(c),a=n(5),o=n.n(a),i=n(4),l=n.n(i),s=n(26),u=n.n(s),d=n(1),b=n(3),p=n(7),f=n.n(p),m=n(171),g=n(54),h=n(292),O=n(25),v=n(66),j=n(0),w=n(49),k=(n(284),["className","id","type","ariaLabel","ariaDescribedBy","label","screenReaderLabel","disabled","help","autoCapitalize","autoComplete","value","onChange","required","onBlur","feedback"]),E=Object(b.forwardRef)((function(e,t){var n=e.className,c=e.id,a=e.type,o=void 0===a?"text":a,i=e.ariaLabel,s=e.ariaDescribedBy,d=e.label,b=e.screenReaderLabel,p=e.disabled,m=e.help,g=e.autoCapitalize,h=void 0===g?"off":g,O=e.autoComplete,v=void 0===O?"off":O,E=e.value,y=void 0===E?"":E,R=e.onChange,_=e.required,C=void 0!==_&&_,N=e.onBlur,P=void 0===N?function(){}:N,S=e.feedback,D=u()(e,k),B=Object(j.useState)(!1),A=l()(B,2),F=A[0],I=A[1];return React.createElement("div",{className:f()("wc-block-components-text-input",n,{"is-active":F||y})},React.createElement("input",r()({type:o,id:c,value:y,ref:t,autoCapitalize:h,autoComplete:v,onChange:function(e){R(e.target.value)},onFocus:function(){return I(!0)},onBlur:function(e){P(e.target.value),I(!1)},"aria-label":i||d,disabled:p,"aria-describedby":m&&!s?c+"__help":s,required:C},D)),React.createElement(w.a,{label:d,screenReaderLabel:b||d,wrapperElement:"label",wrapperProps:{htmlFor:c},htmlFor:c}),!!m&&React.createElement("p",{id:c+"__help",className:"wc-block-components-text-input__help"},m),S)})),y=["className","instanceId","id","ariaDescribedBy","errorId","validateOnMount","focusOnMount","onChange","showError","errorMessage"];t.a=Object(O.withInstanceId)((function(e){var t=e.className,n=e.instanceId,c=e.id,a=e.ariaDescribedBy,i=e.errorId,s=e.validateOnMount,p=void 0===s||s,O=e.focusOnMount,j=void 0!==O&&O,w=e.onChange,k=e.showError,R=void 0===k||k,_=e.errorMessage,C=void 0===_?"":_,N=u()(e,y),P=Object(b.useState)(!0),S=l()(P,2),D=S[0],B=S[1],A=Object(b.useRef)(null),F=Object(m.b)(),I=F.getValidationError,L=F.hideValidationError,x=F.setValidationErrors,M=F.clearValidationError,V=F.getValidationErrorId,q=Object(g.b)().isBeforeProcessing,H=void 0!==c?c:"textinput-"+n,z=void 0!==i?i:H,W=Object(b.useCallback)((function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=A.current||null;if(t){t.value=t.value.trim();var n=t.checkValidity();n?M(z):x(o()({},z,{message:t.validationMessage||Object(d.__)("Invalid value.",'woocommerce'),hidden:e}))}}),[M,z,x]);Object(b.useEffect)((function(){var e;D&&(j&&(null===(e=A.current)||void 0===e||e.focus()),B(!1))}),[j,D,B]),Object(b.useEffect)((function(){D&&(p&&W(),B(!1))}),[D,B,p,W]),Object(b.useEffect)((function(){q&&W()}),[q,W]),Object(b.useEffect)((function(){return function(){M(z)}}),[M,z]);var J=I(z)||{};Object(v.c)(C)&&""!==C&&(J.message=C);var T=J.message&&!J.hidden,G=R&&T&&V(z)?V(z):a;return React.createElement(E,r()({className:f()(t,{"has-error":T}),"aria-invalid":!0===T,id:H,onBlur:function(){W(!1)},feedback:R&&React.createElement(h.a,{errorMessage:C,propertyName:z}),ref:A,onChange:function(e){L(z),w(e)},ariaDescribedBy:G},N))}))},396:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n.n(c),a=n(154),o=n(290),i=n(54),l=n(1),s=n(322),u=n(308),d=n(52),b=n(2),p=n(28),f=function(e){var t=e.allowCreateAccount,n=Object(i.b)(),c=n.customerId,r=n.shouldCreateAccount,a=n.setShouldCreateAccount,o=Object(u.a)(),f=o.billingFields,m=o.setEmail,g=Object(d.a)().dispatchCheckoutEvent,h=!c&&t&&Object(b.getSetting)("checkoutAllowsGuest",!1)&&Object(b.getSetting)("checkoutAllowsSignup",!1)&&React.createElement(p.CheckboxControl,{className:"wc-block-checkout__create-account",label:Object(l.__)("Create an account?",'woocommerce'),checked:r,onChange:function(e){return a(e)}});return React.createElement(React.Fragment,null,React.createElement(s.a,{id:"email",type:"email",label:Object(l.__)("Email address",'woocommerce'),value:f.email,autoComplete:"email",onChange:function(e){m(e),g("set-email-address")},required:!0}),h)},m=n(5),g=n.n(m),h=n(282);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=v(v({},Object(h.a)({defaultTitle:Object(l.__)("Contact information",'woocommerce'),defaultDescription:Object(l.__)("We'll use this email to send you details and updates about your order.",'woocommerce')})),{},{className:{type:"string",default:""},lock:{type:"object",default:{remove:!0,move:!0}}}),w=n(104),k="".concat(w.e,"?redirect_to=").concat(encodeURIComponent(window.location.href)),E=function(){var e=Object(i.b)().customerId;return!Object(b.getSetting)("checkoutShowLoginReminder",!0)||e?null:React.createElement(React.Fragment,null,Object(l.__)("Already have an account? ",'woocommerce'),React.createElement("a",{href:k},Object(l.__)("Log in.",'woocommerce')))},y=n(174);t.default=Object(a.withFilteredAttributes)(j)((function(e){var t=e.title,n=e.description,c=e.showStepNumber,a=e.children,l=e.className,s=Object(i.b)().isProcessing,u=Object(y.b)().allowCreateAccount;return React.createElement(o.a,{id:"contact-fields",disabled:s,className:r()("wc-block-checkout__contact-fields",l),title:t,description:n,showStepNumber:c,stepHeadingContent:function(){return React.createElement(E,null)}},React.createElement(f,{allowCreateAccount:u}),a)}))},49:function(e,t,n){"use strict";var c=n(5),r=n.n(c),a=n(0),o=n(7),i=n.n(o);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t,n=e.label,c=e.screenReaderLabel,r=e.wrapperElement,o=e.wrapperProps,l=void 0===o?{}:o,u=null!=n,d=null!=c;return!u&&d?(t=r||"span",l=s(s({},l),{},{className:i()(l.className,"screen-reader-text")}),React.createElement(t,l,c)):(t=r||a.Fragment,u&&d&&n!==c?React.createElement(t,l,React.createElement("span",{"aria-hidden":"true"},n),React.createElement("span",{className:"screen-reader-text"},c)):React.createElement(t,l,n))}}}]);