"use strict";(self.webpackChunkwebui=self.webpackChunkwebui||[]).push([[880],{37609:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t._AlarmActionBtnContainer=t.default=void 0;var n=u(r(67294)),o=u(r(45697)),a=r(36247),l=r(75041),i=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(72377));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function u(e){return e&&e.__esModule?e:{default:e}}const d={backgroundColor:i.color1,color:i.textColor4,fontWeight:"300",lineHeight:"1.875rem",border:"none",borderRadius:"1rem",cursor:"pointer",margin:"0 0.625rem",padding:"0rem 1.4rem",fontSize:i.medium2},c=e=>{let t=e.action,r=e.onAction;return n.default.createElement("button",{type:"button","data-handle":t,style:d,onClick:()=>r(t,"/al:alarms")},t)};t._AlarmActionBtnContainer=c,c.propTypes={action:o.default.string.isRequired,onAction:o.default.func};var f=(0,a.connect)(null,(e=>({onAction(t,r){e((0,l.runAlarmActionThunk)({action:t,alarmPath:r}))}})))(c);t.default=f},10668:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r(36247),a=r(825),l=r(75041),i=(n=r(71641))&&n.__esModule?n:{default:n},s=(0,o.connect)((e=>({rows:(0,a.selectSelectedAlarmRows)(e),actions:["acknowledge"]})),(e=>({onAction:(t,r)=>e((0,l.runAlarmActionThunk)({action:t,alarmPath:r}))})))(i.default);t.default=s},44684:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t._AlarmColumnsContainer=t.default=void 0;var n=f(r(67294)),o=r(36247),a=f(r(45697)),l=f(r(82417)),i=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(14172)),s=r(38201),u=r(17718),d=r(825);function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function f(e){return e&&e.__esModule?e:{default:e}}const p=e=>{let t=e.onSetColumnVisible,r=e.columnsVisibility;const o=[...s.ALARM_COLUMNS_SELECTION];return o.forEach(((e,t)=>{o[t].isVisible=(0,u.isVisibleColumn)(r,e)})),n.default.createElement("div",{"data-handle":"alarm-column-select"},n.default.createElement(l.default,{onChange:(e,r)=>t(s.ALARM_MANAGER_USER_STORAGE_PATH,e,r),columns:o,styleName:"leftSelectMenu",enabled:!0}))};t._AlarmColumnsContainer=p,p.propTypes={onSetColumnVisible:a.default.func.isRequired,columnsVisibility:a.default.shape(Object)};var m=(0,o.connect)((e=>({columnsVisibility:(0,d.selectAlarmColumns)(e)})),(e=>({onSetColumnVisible:(t,r,n)=>e(i.setColumnVisibilityAction(t,r,n))})))(p);t.default=m},39520:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t._AlarmListContainer=t.default=void 0;var n=_(r(67294)),o=r(36247),a=_(r(45697)),l=_(r(63834)),i=_(r(48210)),s=_(r(92849)),u=r(60622),d=r(83561),c=r(43488),f=r(75041),p=r(825),m=r(7711),h=r(38201),b=r(68613),y=_(r(75064)),g=r(46560),O=r(47810),A=r(71478),v=r(9587),C=r(59235),w=r(17718),S=r(94030);function _(e){return e&&e.__esModule?e:{default:e}}const j="alarmList",M=(e,t,r,o,a)=>(l,i,s)=>{const u=(0,g.pathOr)(void 0,["yangAction","status"],l),d=(0,g.pathOr)(0,["yangAction","completedAt"],l);return n.default.createElement(y.default,{style:o,result:(l||{}).status,status:u,path:s,action:e,onAction:t,onExpand:r,isExpanded:(l||{}).isExpanded,actionIndicatorTimeout:a,completedAt:d})},P=(0,s.default)(j).list;class L extends n.default.Component{constructor(e){super(e),this.onSelectAllRows=this.onSelectAllRows.bind(this),this.onSelectRow=this.onSelectRow.bind(this),this.onChangeSortOrder=this.onChangeSortOrder.bind(this),this.onCometUpdate=this.onCometUpdate.bind(this),this.handleExpand=this.handleExpand.bind(this),this.onGoToPage=this.onGoToPage.bind(this),this.onRunAction=this.onRunAction.bind(this),this.timeout=void 0,this.shouldShowLoading=!0,this.state={hasSelectedAll:!1}}componentDidMount(){const e=this.props,t=e.onSubscribe,r=e.onLoadActionStatusIndicatorTimeout;this.handleLoad({offset:1}),t(this.onCometUpdate),r()}componentDidUpdate(e){const t=this.props,r=t.offset,n=t.rows,o=t.totalNumberOfResults,a=t.isLoading,l=t.showClearedAlarms,i=t.selectedAlarm,s=t.selectedDevice,u=e.isLoading,d=e.showClearedAlarms,c=e.selectedAlarm,f=e.selectedDevice;n&&0===n.length&&o>0&&this.onGoToPage(Math.max(1,r-50)),!a&&u&&(this.shouldShowLoading=!0),l===d&&i===c&&s===f||this.handleLoad({offset:1})}componentWillUnmount(){(0,this.props.onUnsubscribe)(this.onCometUpdate)}handleExpand(e){const t=this.props,r=t.onExpand,n=!t.rows.find((t=>t.rowKey===e)).data.expandable.isExpanded;r(e,n)}handleLoad(e){const t=this.props,r=t.onLoad,n=t.offset,o=t.sortOrder,a=t.sortColumn,l=t.showClearedAlarms,i=t.selectedAlarm,s=t.selectedDevice;r({offset:n,columnKey:a,sortOrder:o,showClearedAlarms:l,severity:i&&i.slice(0,-1),selectedDevice:s,...e})}onSelectAllRows(e){const t=this.props,r=t.rows,n=t.onSelectRows;this.setState({hasSelectedAll:e}),n(e,r.map((e=>e.rowKey)))}onSelectRow(e,t){(0,this.props.onSelectRows)(e,[t])}onRunAction(e,t){(0,this.props.onAction)(e,t)}onChangeSortOrder(e){const t=this.props,r=t.sortOrder,n=t.sortColumn;if(!t.isLoading){let t="ascending",o=e;e===n&&"descending"!==r&&(t="descending"),e===n&&"descending"===r&&(t=void 0,o=void 0),this.handleLoad({offset:1,columnKey:o,sortOrder:t})}}onCometUpdate(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.shouldShowLoading=!1,this.handleLoad({offset:1})}),500)}onGoToPage(e){this.props.isLoading||this.handleLoad({offset:e})}render(){const e=this.props,t=e.isLoading,r=e.offset,o=e.rows,a=e.sortColumn,s=e.sortOrder,f=e.totalNumberOfResults,p=e.actionIndicatorTimeout,m=e.columnsVisibility,b=this.state.hasSelectedAll,y={columnKey:a,isDesc:"descending"===s},g=h.ALARM_COLUMNS_SELECTION.filter((e=>(0,w.isVisibleColumn)(m,e))).length,O=e=>(0,S.truncateLongString)(e,180,40,g);let A=h.ALARM_COLUMNS.map((e=>{let t=e.key,r=e.title;return{...(0,u.getDefaultColumn)(),title:r,key:t,createCell:(0,u.createDataCellFactory)(d.CONFIGURATION_EDITOR_NAME,c.Link,O),createHeader:(0,u.createSortableHeaderFactory)(this.onChangeSortOrder,y)}}));A.unshift({...(0,u.getDefaultColumn)(),key:"isSelected",canBeHidden:!1,isSticky:!0,title:"is selected",createHeader:(0,u.createCheckboxHeaderFactory)(b,this.onSelectAllRows,j),createCell:(0,u.createCheckBoxCellFactory)(this.onSelectRow,j)}),A.push({...(0,u.getDefaultColumn)(),...h.ALARM_ACTION_COLUMNS,createCell:M("acknowledge",this.onRunAction,this.handleExpand,P.cell.actionButton,p)},{...(0,u.getDefaultColumn)(),title:"expandable",key:"expandable",isExpandable:!0,createCell:(0,v.createResultCellFactory)()}),A=A.filter((e=>(0,w.isVisibleColumn)(m,e)));const C=[0===f&&n.default.createElement("div",{key:"empty",style:P.empty,"data-handle":"empty-alarm-list"},"No alarms in list"),n.default.createElement(i.default,{chunkSize:50,key:"pagination",offset:r,onGoToPage:this.onGoToPage,totalNumberOfResults:f})];return n.default.createElement("div",{style:{margin:"0.75rem auto 0"}},n.default.createElement(l.default,{isLoading:t&&this.shouldShowLoading,columns:A,rows:o,styleName:j,chunkSize:50,additionalElements:C,offset:r,nrOfStaticColumns:1,shouldRetainColumnsSize:!1}))}}t._AlarmListContainer=L,L.propTypes={actionIndicatorTimeout:a.default.string,columnsVisibility:a.default.shape(Object),isLoading:a.default.bool,offset:a.default.number,onAction:a.default.func.isRequired,onExpand:a.default.func,onLoad:a.default.func.isRequired,onLoadActionStatusIndicatorTimeout:a.default.func,onSelectRows:a.default.func.isRequired,onSubscribe:a.default.func.isRequired,onUnsubscribe:a.default.func.isRequired,rows:a.default.arrayOf(Object),selectedAlarm:a.default.string,selectedDevice:a.default.string,showClearedAlarms:a.default.bool,sortColumn:a.default.string,sortOrder:a.default.string,totalNumberOfResults:a.default.number};var E=(0,o.connect)((e=>({actionIndicatorTimeout:(0,A.selectGlobalSetting)(e,O.ACTION_STATUS_INDICATOR_TIMEOUT),columnsVisibility:(0,p.selectAlarmColumns)(e),isLoading:(0,p.selectAlarmListIsLoading)(e)||(0,A.selectGlobalSettingsIsLoading)(e)||(0,C.selectResultPending)(e,"/al:alarms/purge cleared"),offset:(0,p.selectAlarmOffset)(e),rows:(0,p.selectAlarmRows)(e),selectedAlarm:(0,p.selectSelectedAlarm)(e),showClearedAlarms:(0,p.selectShowClearedAlarms)(e),sortColumn:(0,p.selectAlarmSortColumn)(e),sortOrder:(0,p.selectAlarmSortOrder)(e),totalNumberOfResults:(0,p.selectTotalNumberOfAlarms)(e)})),(e=>({onAction(t,r){e((0,f.runAlarmActionThunk)({action:t,alarmPath:r}))},onExpand:(t,r)=>e((0,f.setAlarmExpandedAction)(t,r)),onLoad(t){let r=t.offset,n=t.columnKey,o=t.sortOrder,a=t.showClearedAlarms,l=t.severity,i=t.selectedDevice;return e((0,f.getAlarms)({chunkSize:50,offset:r,columnKey:n,sortOrder:o,showClearedAlarms:a,severity:l,selectedDevice:i}))},onLoadActionStatusIndicatorTimeout(){e((0,O.getGlobalApplicationSetting)({setting:O.ACTION_STATUS_INDICATOR_TIMEOUT}))},onSelectRows(t,r){e((0,f.selectAlarmRowsAction)(t,r))},onSubscribe(t){e((0,b.subscribeCdbOperAction)([m.alarmsPath],t))},onUnsubscribe(t){e((0,b.unsubscribeCdbOperAction)([m.alarmsPath],t))}})))(L);t.default=E},11980:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=g(r(45697)),o=g(r(66877)),a=g(r(17427)),l=g(r(39520)),i=g(r(44684)),s=g(r(37609)),u=g(r(75793)),d=g(r(67294)),c=g(r(36032)),f=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(72377)),p=g(r(43985)),m=g(r(10668)),h=g(r(49079)),b=r(76110);function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}function g(e){return e&&e.__esModule?e:{default:e}}const O=e=>{let t=e.routeParams;const r=(0,b.getDeviceFromUrl)(t.splat);return d.default.createElement("div",{style:c.default.application},d.default.createElement(o.default,{additionalComponentsRight:[d.default.createElement(m.default,null)]},d.default.createElement(p.default,null),d.default.createElement("div",{style:c.default.secondHeader},d.default.createElement("div",{style:c.default.contentWrapper},d.default.createElement("div",{style:c.default.leftContainer},d.default.createElement(i.default,null)),d.default.createElement("div",{style:c.default.rightContainer},d.default.createElement(u.default,null),d.default.createElement(s.default,{action:"purge cleared"}),d.default.createElement(h.default,{selectedDevice:r})))),d.default.createElement("div",{style:f.shadow})),d.default.createElement("div",{style:c.default.scrollingContainer},d.default.createElement(l.default,{selectedDevice:r})),d.default.createElement(a.default,null))};O.propTypes={routeParams:n.default.shape(Object).isRequired};var A=O;t.default=A},36032:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}return n.default=e,r&&r.set(e,n),n}(r(72377));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}var a={application:{...n.application,height:"100vh",display:"flex",flexFlow:"column",backgroundImage:n.pattern1},scrollingContainer:{overflow:"auto",flexGrow:"1"},secondHeader:{backgroundColor:n.color11,borderTop:"1px solid #cccccc",height:"50px",justifyContent:"flex-end"},contentWrapper:{display:"flex",maxWidth:n.maxWidth,margin:"0 auto",height:"100%",padding:"0 1rem"},leftContainer:{alignSelf:"center",marginLeft:"0.6rem"},rightContainer:{display:"flex",alignItems:"center",flexGrow:1,justifyContent:"flex-end",margin:"0 0.5rem"}};t.default=a},43985:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t._AlarmSummaryContainer=t.default=void 0;var n=h(r(67294)),o=r(36247),a=h(r(45697)),l=r(7711),i=r(58595),s=h(r(69794)),u=r(75041),d=r(825),c=r(68613),f=h(r(49205)),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(72377));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function h(e){return e&&e.__esModule?e:{default:e}}class b extends n.default.Component{constructor(e){super(e),this.handleSelectAlarm=this.handleSelectAlarm.bind(this),this.onCometUpdate=this.onCometUpdate.bind(this),this.timeout=void 0}componentDidMount(){const e=this.props,t=e.onLoad;(0,e.onSubscribe)(this.onCometUpdate),t()}componentWillUnmount(){(0,this.props.onUnsubscribe)(this.onCometUpdate),clearTimeout(this.timeout)}handleSelectAlarm(e){const t=this.props,r=t.selectedAlarm;(0,t.onSelectAlarm)(r===e?"":e)}onCometUpdate(){const e=this.props.onLoad;clearTimeout(this.timeout),this.timeout=setTimeout((()=>{e()}),500)}render(){const e=this.props,t=e.alarmSummary,r=e.selectedAlarm,o=e.isLoading;return n.default.createElement("div",{style:s.default.wrapper,"data-handle":"alarmSummary"},o&&n.default.createElement("div",{style:s.default.loader},n.default.createElement(f.default,{color:p.color9})),n.default.createElement("div",{style:{visibility:o?"hidden":"visible"}},(0,i.buildSummary)(t,r,this.handleSelectAlarm,s.default,!0)))}}t._AlarmSummaryContainer=b,b.propTypes={alarmSummary:a.default.shape(Object),isLoading:a.default.bool,onLoad:a.default.func.isRequired,onSelectAlarm:a.default.func,onSubscribe:a.default.func.isRequired,onUnsubscribe:a.default.func.isRequired,selectedAlarm:a.default.string};var y=(0,o.connect)((e=>({alarmSummary:(0,d.selectAlarmSummaryResults)(e),isLoading:(0,d.selectAlarmSummaryIsLoading)(e),selectedAlarm:(0,d.selectSelectedAlarm)(e)})),(e=>({onLoad:()=>e((0,u.getAlarmSummary)()),onSelectAlarm(t){e((0,u.setSelectedAlarmAction)(t))},onSubscribe(t){e((0,c.subscribeCdbOperAction)([l.alarmsPath],t))},onUnsubscribe(t){e((0,c.unsubscribeCdbOperAction)([l.alarmsPath],t))}})))(b);t.default=y},69794:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}return n.default=e,r&&r.set(e,n),n}(r(72377));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}var a={wrapper:{width:"15rem",margin:"-4rem auto 0"},loader:{position:"absolute",margin:"1.5rem 6.5rem"},customContent:{fontSize:"2.2rem",display:"flex",justifyContent:"space-around",margin:"0 auto 0.4rem"},alarmButton:{display:"flex",flexDirection:"column",alignItems:"center",color:n.color3,borderRadius:"0.5rem",padding:"0.5rem",cursor:"pointer",height:"3rem",width:"3rem"},alarmSeverity:{fontSize:"0.9rem"},criticals:n.color5,majors:n.color15,minors:n.color1};t.default=a},75793:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t._CheckboxFilterContainer=t.default=void 0;var n=d(r(67294)),o=d(r(45697)),a=r(36247),l=d(r(56792)),i=r(75041),s=r(825);function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}const c={margin:"0 0.5rem",fontSize:"0.875rem",alignSelf:"center",color:function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(72377)).color1},f=e=>{let t=e.onShowClearedAlarms,r=e.showClearedAlarms;return n.default.createElement(l.default,{name:"show cleared",value:r,onSetValue:()=>t()},n.default.createElement("span",{style:c},"show cleared"))};t._CheckboxFilterContainer=f,f.propTypes={onShowClearedAlarms:o.default.func,showClearedAlarms:o.default.bool};var p=(0,a.connect)((e=>({showClearedAlarms:(0,s.selectShowClearedAlarms)(e)})),(e=>({onShowClearedAlarms(){e((0,i.showClearedAlarmsAction)())}})))(f);t.default=p},49079:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t._ComboBoxFilterContainer=t.default=void 0;var n=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(67294)),o=c(r(45697)),a=r(36247),l=c(r(70567)),i=r(75041),s=r(825),u=r(43488),d=r(76110);function c(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}const p=e=>{let t=e.onLoad,r=e.isLoading,o=e.options,a=e.router,i=e.selectedDevice;return(0,n.useEffect)((()=>{t()}),[t]),n.default.createElement(l.default,{isLoading:r,options:o,editable:!0,value:i,onChange:e=>{(e=>{t(e)})(e)},onSetValue:e=>{(e=>{a.push((0,d.getLinkWithDevice)(e))})(e)},placeholder:"Search by device",name:"filter",styleName:"round"})};t._ComboBoxFilterContainer=p,p.propTypes={isLoading:o.default.bool,onLoad:o.default.func.isRequired,options:o.default.arrayOf(o.default.shape({value:o.default.string,text:o.default.string})),router:o.default.shape(Object),selectedDevice:o.default.string};var m=(0,a.connect)((e=>({isLoading:(0,s.selectDevicesIsLoading)(e),options:(0,s.selectDeviceOptions)(e)})),(e=>({onLoad(t){e((0,i.getDevices)({searchInput:t}))}})))((0,u.withRouter)(p));t.default=m}}]);