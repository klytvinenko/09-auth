(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/(auth routes)/sign-in/SignInPage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "SignInPage-module__QK7xoW__actions",
  "error": "SignInPage-module__QK7xoW__error",
  "form": "SignInPage-module__QK7xoW__form",
  "formGroup": "SignInPage-module__QK7xoW__formGroup",
  "formTitle": "SignInPage-module__QK7xoW__formTitle",
  "input": "SignInPage-module__QK7xoW__input",
  "mainContent": "SignInPage-module__QK7xoW__mainContent",
  "submitButton": "SignInPage-module__QK7xoW__submitButton",
});
}),
"[project]/lib/api/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const baseURL = `${("TURBOPACK compile-time value", "http://localhost:3000")}/api`;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: baseURL,
    withCredentials: true
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/clientApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNote",
    ()=>createNote,
    "deleteNote",
    ()=>deleteNote,
    "fetchNoteById",
    ()=>fetchNoteById,
    "fetchNotes",
    ()=>fetchNotes,
    "login",
    ()=>login,
    "register",
    ()=>register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/api.ts [app-client] (ecmascript)");
;
{
/*
login
logout
checkSession
getMe
updateMe  
    */ }const myKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx5dHZpbmVua28wMUBnbWFpbC5jb20iLCJpYXQiOjE3NjA0NDMzMjB9.WG1EvLMcBLV7NgZKvxi2vNu11oGTLikSbgTgGzQN1kQ");
const authHeaders = {
    Authorization: `Bearer ${myKey}`
};
const fetchNotes = async (search, page, tag)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/notes", {
            params: {
                search,
                page,
                perPage: 12,
                sortBy: "created",
                tag
            },
            headers: authHeaders
        });
        const result = res.data;
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return {
            notes: [],
            totalPages: 0
        };
    }
};
const fetchNoteById = async (id)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/notes/${id}`, {
            headers: authHeaders
        });
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const createNote = async (values)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/notes`, values, {
            headers: authHeaders
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const deleteNote = async (noteId)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/notes/${noteId}`, {
            headers: authHeaders
        });
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const register = async (data)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/auth/register", data, {
            headers: authHeaders,
            withCredentials: true
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        const err = error;
        console.error(err);
        throw new Error(err.response?.data?.error || "Registration failed");
    }
};
const login = async (data)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/auth/login", data, {
            headers: authHeaders,
            withCredentials: true
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        const err = error;
        console.error(err);
        throw new Error(err.response?.data?.error || "Registration failed");
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/store/authStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        user: null,
        isAuthenticated: false,
        setUser: (user)=>{
            set({
                user,
                isAuthenticated: true
            });
        },
        clearIsAuthenticated: ()=>{
            set({
                user: null,
                isAuthenticated: false
            });
        }
    }), {
    name: "auth-storage"
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(auth routes)/sign-in/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(auth routes)/sign-in/SignInPage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/clientApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/authStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const SignInPage = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "698137cdbc1f101800bdfd71b75f849f64fec84ef8f54559edc88fb9a8892bfc") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "698137cdbc1f101800bdfd71b75f849f64fec84ef8f54559edc88fb9a8892bfc";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const setUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_temp);
    let t0;
    if ($[1] !== router || $[2] !== setUser) {
        t0 = async (formData)=>{
            ;
            try {
                const formValues = Object.fromEntries(formData);
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["login"])(formValues);
                if (res) {
                    setUser(res);
                    router.push("/profile");
                } else {
                    setError("Invalid email or password");
                }
            } catch (t1) {
                const error_0 = t1;
                console.log(error_0);
                setError("Oops... some error");
            }
        };
        $[1] = router;
        $[2] = setUser;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const handleSubmit = t0;
    let t1;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formTitle,
            children: "Sign in"
        }, void 0, false, {
            fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "email",
                    children: "Email"
                }, void 0, false, {
                    fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                    lineNumber: 55,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "email",
                    type: "email",
                    name: "email",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                    lineNumber: 55,
                    columnNumber: 77
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "password",
                    children: "Password"
                }, void 0, false, {
                    fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                    lineNumber: 62,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "password",
                    type: "password",
                    name: "password",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                    lineNumber: 62,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                children: "Log in"
            }, void 0, false, {
                fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                lineNumber: 69,
                columnNumber: 39
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== error) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
            children: error
        }, void 0, false, {
            fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = error;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== handleSubmit || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    action: handleSubmit,
                    children: [
                        t1,
                        t2,
                        t3,
                        t4,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                    lineNumber: 84,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                lineNumber: 84,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
        $[10] = handleSubmit;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
};
_s(SignInPage, "O5Fjhfz7jqmmodYmU/ZEQZrK11E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = SignInPage;
const __TURBOPACK__default__export__ = SignInPage;
function _temp(state) {
    return state.setUser;
}
var _c;
__turbopack_context__.k.register(_c, "SignInPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_caafb50f._.js.map