(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./node_modules/lingo3d/lib/display/core/CameraBase/enableMouseControl.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var useCamera=__webpack_require__("./node_modules/lingo3d/lib/states/useCamera.js"),renderSetup=__webpack_require__("./node_modules/lingo3d/lib/engine/renderLoop/renderSetup.js"),lib=__webpack_require__("./node_modules/@lincode/reactivity/lib/index.js");const[setPointerLockCamera,getPointerLockCamera]=Object(lib.e)(void 0);var mouse=__webpack_require__("./node_modules/lingo3d/lib/api/mouse.js"),usePickingMode=__webpack_require__("./node_modules/lingo3d/lib/states/usePickingMode.js");__webpack_exports__.default=function(){this.done||(this.createEffect((()=>{if(!0===this.mouseControlState.get()&&Object(useCamera.a)()===this.camera)return Object(usePickingMode.b)("camera"),()=>{Object(usePickingMode.b)("mouse")}}),[this.mouseControlState.get,useCamera.a]),this.createEffect((()=>{if(Object(useCamera.a)()!==this.camera||!this.mouseControlState.get())return;if(getPointerLockCamera()===this.camera){const handleMove=e=>this.gyrate(e.movementX,e.movementY);return document.addEventListener("mousemove",handleMove),()=>{document.removeEventListener("mousemove",handleMove)}}let started=!1,[xOld,yOld]=[0,0];const handle0=mouse.a.on("down",(e=>(started=!0,[xOld,yOld]=[e.clientX,e.clientY]))),handle1=mouse.a.on("up",(()=>started=!1)),handleMove=e=>{if(void 0===e.movementX){const[movementX,movementY]=[e.clientX-xOld,e.clientY-yOld];return[xOld,yOld]=[e.clientX,e.clientY],void(started&&this.gyrate(2*movementX,2*movementY))}started&&this.gyrate(2*e.movementX,2*e.movementY)};return renderSetup.a.addEventListener("pointermove",handleMove),()=>{handle0.cancel(),handle1.cancel(),renderSetup.a.removeEventListener("pointermove",handleMove),started=!1}}),[this.mouseControlState.get,useCamera.a,getPointerLockCamera]),this.createEffect((()=>{const camera=Object(useCamera.a)();if(!0!==this.mouseControlState.get()||camera!==this.camera)return;const onClick=()=>{var _a;return null===(_a=renderSetup.a.requestPointerLock)||void 0===_a?void 0:_a.call(renderSetup.a)},onPointerLockChange=()=>{document.pointerLockElement===renderSetup.a?setPointerLockCamera(camera):setPointerLockCamera(void 0)};return renderSetup.a.addEventListener("click",onClick),document.addEventListener("pointerlockchange",onPointerLockChange),()=>{renderSetup.a.removeEventListener("click",onClick),document.removeEventListener("pointerlockchange",onPointerLockChange),document.exitPointerLock(),setPointerLockCamera(void 0)}}),[this.mouseControlState.get,useCamera.a]))}}}]);