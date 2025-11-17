(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/(private routes)/profile/ProfilePage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "ProfilePage-module__RVJE3a__avatar",
  "avatarWrapper": "ProfilePage-module__RVJE3a__avatarWrapper",
  "editProfileButton": "ProfilePage-module__RVJE3a__editProfileButton",
  "formTitle": "ProfilePage-module__RVJE3a__formTitle",
  "header": "ProfilePage-module__RVJE3a__header",
  "mainContent": "ProfilePage-module__RVJE3a__mainContent",
  "profileCard": "ProfilePage-module__RVJE3a__profileCard",
  "profileInfo": "ProfilePage-module__RVJE3a__profileInfo",
  "usernameWrapper": "ProfilePage-module__RVJE3a__usernameWrapper",
});
}),
"[project]/app/(private routes)/profile/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$ProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(private routes)/profile/ProfilePage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
//import { Metadata } from "next";
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/authStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// export const metadata: Metadata = {
// title: "User Profile | NoteHub",
//   description: "View and manage your personal profile information in NoteHub.",
//   openGraph: {
//     title: "User Profile | NoteHub",
//     description: "Manage your profile information, avatar, and account settings on NoteHub.",
//     url: "https://notehub.com/profile",
//     images: [
//       {
//         url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
//         width: 1200,
//         height: 630,
//         alt: "NoteHub Profile",
//       },
//     ],
//   },
// };
const Profile = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "d895222b9c0bc10fd5c013be268bf1681fdce8fe7f3ddfe73a963d08301038df") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d895222b9c0bc10fd5c013be268bf1681fdce8fe7f3ddfe73a963d08301038df";
    }
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_temp);
    const avatar = user?.avatar || "https://ac.goit.global/fullstack/react/default-avatar.jpg";
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$ProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$ProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formTitle,
                    children: "Profile Page"
                }, void 0, false, {
                    fileName: "[project]/app/(private routes)/profile/page.tsx",
                    lineNumber: 40,
                    columnNumber: 38
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/profile/edit",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$ProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editProfileButton,
                    children: "Edit Profile"
                }, void 0, false, {
                    fileName: "[project]/app/(private routes)/profile/page.tsx",
                    lineNumber: 40,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(private routes)/profile/page.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== avatar) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$ProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarWrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: avatar,
                alt: "User Avatar",
                width: 120,
                height: 120,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$ProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar
            }, void 0, false, {
                fileName: "[project]/app/(private routes)/profile/page.tsx",
                lineNumber: 47,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/(private routes)/profile/page.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = avatar;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const t2 = user?.username;
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "Username: ",
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/app/(private routes)/profile/page.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = user?.email;
    let t5;
    if ($[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "Email: ",
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/app/(private routes)/profile/page.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t3 || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$ProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileInfo,
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/app/(private routes)/profile/page.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t3;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t1 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$ProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$ProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileCard,
                    children: [
                        t0,
                        t1,
                        t6
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(private routes)/profile/page.tsx",
                    lineNumber: 82,
                    columnNumber: 49
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/(private routes)/profile/page.tsx",
                lineNumber: 82,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/(private routes)/profile/page.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t1;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    return t7;
};
_s(Profile, "QOrrLxs+Izd52YXL1Bl0ukUVr1c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = Profile;
const __TURBOPACK__default__export__ = Profile;
function _temp(s) {
    return s.user;
}
var _c;
__turbopack_context__.k.register(_c, "Profile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_%28private%20routes%29_profile_b65bf3d2._.js.map