(this["webpackJsonptomato-tasker"]=this["webpackJsonptomato-tasker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),s=n.n(r),o=(n(14),n(1)),u=n(2),c=n(4),l=n(3),m=n(5),f=n(6),h=n.n(f),k=(n(16),n(17),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"task-item"},i.a.createElement("textarea",{className:"before",placeholder:"Before",defaultValue:this.props.before,onChange:this.props.beforeChangeHandler}),i.a.createElement("textarea",{className:"after",placeholder:"After",defaultValue:this.props.after,onChange:this.props.afterChangeHandler}))}}]),t}(i.a.Component)),d=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).timer=null,n.state={timerValue:1500,timerRunning:!1},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.timerRunning?"Pause":"Start";return i.a.createElement("div",{className:"timer"},i.a.createElement("div",{className:"timerText"},Math.floor(this.state.timerValue/60),":",this.state.timerValue%60),i.a.createElement("button",{onClick:this.toggleRunning.bind(this)},e),i.a.createElement("button",{onClick:this.reset.bind(this)},"+ New"))}},{key:"toggleRunning",value:function(){this.setState((function(e){return{timerRunning:!e.timerRunning}}))}},{key:"componentDidUpdate",value:function(e,t){this.state.timerRunning&&!t.timerRunning?this.kickOffTimer():!this.state.timerRunning&&t.timerRunning&&null!==this.timer&&clearTimeout(this.timer),0===this.state.timerValue&&0!==t.timerValue&&new Notification("Pomo Timer Finished!")}},{key:"reset",value:function(){this.setState({timerRunning:!1,timerValue:1500}),this.props.resetHandler()}},{key:"kickOffTimer",value:function(){var e=this;0!==this.state.timerValue&&(this.timer=setTimeout((function(){e.setState((function(e){return{timerValue:e.timerValue-1}})),e.kickOffTimer()}),1e3))}}]),t}(i.a.Component),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).checkNotificationPermission(),n.state={taskItems:[{before:"",after:""}]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.taskItems.flatMap((function(t,n){return i.a.createElement(k,{before:t.before,after:t.after,key:n,beforeChangeHandler:function(t){return e.handleBeforeChange(n,t)},afterChangeHandler:function(t){return e.handleAfterChange(n,t)}})})).reverse();return i.a.createElement("div",{className:"app"},i.a.createElement(d,{resetHandler:this.handleReset.bind(this)}),i.a.createElement("div",{className:"items"},t),'"')}},{key:"handleBeforeChange",value:function(e,t){var n=this,a=t.target.value;this.setState((function(t){var i=h()(n.state.taskItems[e],{$merge:{before:a}});return{taskItems:h()(t.taskItems,{$splice:[[e,1,i]]})}}))}},{key:"handleAfterChange",value:function(e,t){var n=this,a=t.target.value;this.setState((function(t){var i=h()(n.state.taskItems[e],{$merge:{after:a}});return{taskItems:h()(t.taskItems,{$splice:[[e,1,i]]})}}))}},{key:"handleReset",value:function(){var e={before:"",after:""};this.setState((function(t){return{taskItems:[e].concat(t.taskItems)}}))}},{key:"checkNotificationPermission",value:function(){"granted"!==window.Notification.permission&&window.Notification.requestPermission().then((function(e){"granted"===e&&new Notification("Tomato Tasker notifications are on!")}))}}]),t}(i.a.Component);s.a.render(i.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.11a23102.chunk.js.map