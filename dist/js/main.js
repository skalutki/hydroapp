!function(n){var e={};function t(c){if(e[c])return e[c].exports;var r=e[c]={i:c,l:!1,exports:{}};return n[c].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(c,r,function(e){return n[e]}.bind(null,r));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n    window.addEventListener('load', function() {\n        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n            // Registration was successful\n            console.log('ServiceWorker registration successful with scope: ', registration.scope);\n        }, function(err) {\n            // registration failed :(\n            console.log('ServiceWorker registration failed: ', err);\n        });\n    });\n}\n\n// place your code below\n\n\nconst counter = document.querySelector('.form__glass__counter--js');\n\nconst currentValue = 0;\n\nconst addButton = document.querySelector('.form__button__add--js');\n\nconst subtractButton = document.querySelector('.form__button__subtract--js');\n\n\n\nconst key = new Date().toISOString().slice(0, 10);\n\n\naddButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    const currentValue = parseInt(counter.innerHTML) + 1;\n    counter.innerHTML = currentValue;\n    localStorage.setItem(key, currentValue);\n    chechFunction(currentValue);\n    checkCounter(counter.innerHTML);\n\n\n});\n\nsubtractButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    const currentValue = parseInt(counter.innerHTML) - 1;\n    counter.innerHTML = currentValue;\n    localStorage.setItem(key, currentValue);\n    checkFunction(currentValue);\n    checkCounter(counter.innerHTML);\n\n\n});\n\n\nfunction checkFunction(checkFunction) {\n    if (checkFunction < 0) {\n        alert('Nie możesz zejść ponieżej zera!');\n        counter.innerHTML = currentValue;\n    }\n}\nconst localKey = key;\n\nif (counter.innerHTML = 0) {\n    counter.innerHTML = localStorage.getItem(key);\n\n}\n\nconsole.log(counter.innerHTML);\nconsole.log(localStorage.getItem(key));\n\n\n\n/*if (checkStatus == 0) {\n    const localKey = localStorage.getItem(key);\n    counter.innerHTML = currentValue;\n}\n\ncheckStatus.onstorage = event => {\n    if (event.key != 0) {\n        localKey = localStorage.getItem(key);\n        counter.innerHTML = currentValue;\n    }\n}\n\nif (key ==!0) {\n    localStorage.setItem(key, 0);\n}\n\nif (counter == 0) {\n    localStorage.getItem(key, currentValue);\n    counter.innerHTML = currentValue\n}\n\nif (localStorage(key, currentValue) < 0) {\n    alert(\"Nie możesz zejść ponieżej zera!\");\n    const currentValue = 0;\n}*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcblxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xuXG5cbmNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fZ2xhc3NfX2NvdW50ZXItLWpzJyk7XG5cbmNvbnN0IGN1cnJlbnRWYWx1ZSA9IDA7XG5cbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19idXR0b25fX2FkZC0tanMnKTtcblxuY29uc3Qgc3VidHJhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fYnV0dG9uX19zdWJ0cmFjdC0tanMnKTtcblxuXG5cbmNvbnN0IGtleSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cblxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gcGFyc2VJbnQoY291bnRlci5pbm5lckhUTUwpICsgMTtcbiAgICBjb3VudGVyLmlubmVySFRNTCA9IGN1cnJlbnRWYWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgY2hlY2hGdW5jdGlvbihjdXJyZW50VmFsdWUpO1xuICAgIGNoZWNrQ291bnRlcihjb3VudGVyLmlubmVySFRNTCk7XG5cblxufSk7XG5cbnN1YnRyYWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gcGFyc2VJbnQoY291bnRlci5pbm5lckhUTUwpIC0gMTtcbiAgICBjb3VudGVyLmlubmVySFRNTCA9IGN1cnJlbnRWYWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgY2hlY2tGdW5jdGlvbihjdXJyZW50VmFsdWUpO1xuICAgIGNoZWNrQ291bnRlcihjb3VudGVyLmlubmVySFRNTCk7XG5cblxufSk7XG5cblxuZnVuY3Rpb24gY2hlY2tGdW5jdGlvbihjaGVja0Z1bmN0aW9uKSB7XG4gICAgaWYgKGNoZWNrRnVuY3Rpb24gPCAwKSB7XG4gICAgICAgIGFsZXJ0KCdOaWUgbW/FvGVzeiB6ZWrFm8SHIHBvbmllxbxlaiB6ZXJhIScpO1xuICAgICAgICBjb3VudGVyLmlubmVySFRNTCA9IGN1cnJlbnRWYWx1ZTtcbiAgICB9XG59XG5jb25zdCBsb2NhbEtleSA9IGtleTtcblxuaWYgKGNvdW50ZXIuaW5uZXJIVE1MID0gMCkge1xuICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcblxufVxuXG5jb25zb2xlLmxvZyhjb3VudGVyLmlubmVySFRNTCk7XG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblxuXG5cbi8qaWYgKGNoZWNrU3RhdHVzID09IDApIHtcbiAgICBjb25zdCBsb2NhbEtleSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgY291bnRlci5pbm5lckhUTUwgPSBjdXJyZW50VmFsdWU7XG59XG5cbmNoZWNrU3RhdHVzLm9uc3RvcmFnZSA9IGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ICE9IDApIHtcbiAgICAgICAgbG9jYWxLZXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBjb3VudGVyLmlubmVySFRNTCA9IGN1cnJlbnRWYWx1ZTtcbiAgICB9XG59XG5cbmlmIChrZXkgPT0hMCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgMCk7XG59XG5cbmlmIChjb3VudGVyID09IDApIHtcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgY291bnRlci5pbm5lckhUTUwgPSBjdXJyZW50VmFsdWVcbn1cblxuaWYgKGxvY2FsU3RvcmFnZShrZXksIGN1cnJlbnRWYWx1ZSkgPCAwKSB7XG4gICAgYWxlcnQoXCJOaWUgbW/FvGVzeiB6ZWrFm8SHIHBvbmllxbxlaiB6ZXJhIVwiKTtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSAwO1xufSovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);