// @BYTEGENCY CREATION

import { COOKIE_KEY } from "../utils/config";
import { readCookie, debugLog, postReq } from "../utils/utils";

let COUNTER = 0;
let DELAY, NUM_ITERATION = 3000;

var ALL_BOARDING = [
    "chrome-extension",
    "facebook-ads-filters",
    "pinterest-ads-filters",
    "tiktok-ads-filters",
    "shops-filters",
    "products-filters",
];

async function resetOnBoarding() {
    let mutationCommand = {
        operationName: "UPDATE_USER",
        variables: {
            input: {
                id: "4839b94f-d437-40a4-b692-0e4cd1db8838",
                onboardingCompletedStepsIds: "[]"
            }
        },
        query: "mutation UPDATE_USER($input: UpdateUserInput!) {\n  updateUser(input: $input) {\n    id\n    onboardingCompletedStepsIds\n    savedQueries {\n      name\n      query\n      type\n      __typename\n    } \n    __typename\n  }\n}"
    };

    await postReq("https://y5ec7qy3bzbkxm6udp4u3o3lee.appsync-api.eu-west-1.amazonaws.com/graphql",
        {
            "authorization": readCookie(COOKIE_KEY),
            "content-type": "application/json",
        },
        JSON.stringify(mutationCommand),
        {
            method: "POST"
        }
    );
}

async function collectBoarding(boarding) {
    await postReq("https://app.minea.com/en/onboarding",
        {
            "content-type": "text/plain;charset=UTF-8",
            "next-action": "9f1d846bdd46d40e8207f6b6eb45527f1eeed356",
            "next-router-state-tree": "%5B%22%22%2C%7B%22children%22%3A%5B%5B%22locale%22%2C%22en%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22(main)%22%2C%7B%22children%22%3A%5B%22onboarding%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%2C%22adsSideSheet%22%3A%5B%22__DEFAULT__%22%2C%7B%7D%5D%2C%22influencersSideSheet%22%3A%5B%22__DEFAULT__%22%2C%7B%7D%5D%2C%22placementsSideSheet%22%3A%5B%22__DEFAULT__%22%2C%7B%7D%5D%2C%22productsSideSheet%22%3A%5B%22__DEFAULT__%22%2C%7B%7D%5D%2C%22shopsSideSheet%22%3A%5B%22__DEFAULT__%22%2C%7B%7D%5D%2C%22upgradeDialog%22%3A%5B%22__DEFAULT__%22%2C%7B%7D%5D%7D%5D%2C%22auth%22%3A%5B%22__DEFAULT__%22%2C%7B%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
            "cookie": "_gcl_au=1.1.1310672295.1712235774; __eventn_id=4bb6833a-2109-486c-9dc3-7d7c9db298dc; _ga=GA1.1.1054341108.1712235774; _fbp=fb.1.1712235774424.124199889; _tt_enable_cookie=1; _ttp=Qh52anOWgiJaS71OYOJacARq14d; NEXT_LOCALE=en; __stripe_mid=c9305b18-6adc-45d0-8cec-84d07edf178d7cacab; crisp-client%2Fsession%2Fbe4d7be2-f9a8-4f83-aed2-d82cdd63ba6a=session_fc51e3b6-e65c-464c-ade0-77ebb5f78593; _gcl_aw=GCL.1713264135.CjwKCAjww_iwBhApEiwAuG6ccI4dxkz12F2vMyf5ajITYWRXbl7QViH6ywWRqDo7exK80ErWfyrVMBoCaKsQAvD_BwE; _clck=1uuktqj%7C2%7Cfl2%7C0%7C1555; crisp-client%2Fsocket%2Fbe4d7be2-f9a8-4f83-aed2-d82cdd63ba6a=1; __eventn_uid=4839b94f-d437-40a4-b692-0e4cd1db8838; __eventn_id_usr=%7B%22email%22%3A%22lizzo%40gmail.com%22%2C%22userAccess%22%3A1%2C%22plan%22%3A%22lite%22%2C%22lang%22%3A%22en%22%7D; __stripe_sid=6a0f3a6a-86a9-4509-bbdd-e91792c3f77a7c245f; minea_jwt=eyJraWQiOiJHR0x5OHRHWktodkxlNmRmQUhTb3ZRQ01USkI0c0tjNnBWT21Ec3p3aEd3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0ODM5Yjk0Zi1kNDM3LTQwYTQtYjY5Mi0wZTRjZDFkYjg4MzgiLCJjb2duaXRvOmdyb3VwcyI6WyJsaXRlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnByZWZlcnJlZF9yb2xlIjoiYXJuOmF3czppYW06OjU5MzUwMzU2NjI4Njpyb2xlXC9ldS13ZXN0LTFfMUxCQkhRQjRuLWxpdGVHcm91cFJvbGUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMV8xTEJCSFFCNG4iLCJjb2duaXRvOnVzZXJuYW1lIjoiNDgzOWI5NGYtZDQzNy00MGE0LWI2OTItMGU0Y2QxZGI4ODM4IiwiZ2l2ZW5fbmFtZSI6ImxpenpvIiwiY29nbml0bzpyb2xlcyI6WyJhcm46YXdzOmlhbTo6NTkzNTAzNTY2Mjg2OnJvbGVcL2V1LXdlc3QtMV8xTEJCSFFCNG4tbGl0ZUdyb3VwUm9sZSJdLCJhdWQiOiIxMWlkbjJvdDVvcnY2ZG00ZjY4bGtyZnU3ZCIsImV2ZW50X2lkIjoiNGQ0ZGQwMWEtZTNmMy00YjRhLTg3MTYtZmIxYzliMzkzMjc4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MTM1MzU1NzMsImN1c3RvbTptdWx0aXBsaWVyIjoiMSIsImV4cCI6MTcxMzU1MzAxMiwiaWF0IjoxNzEzNTQ5NDEzLCJlbWFpbCI6ImxpenpvQGdtYWlsLmNvbSJ9.MSqXtoyIOLqijdldI1267O2o5_O1xE2yU7IGdLTCihlwd6IaIbHX5VsWZhXoWoiq_7vtHK1Zfp8ZaOB7rHhW0wr9qNvv2YX685RyWDrVfGVFZ-fQZNr2kz3qGRHkteuyti6gpnn3yiCoaUsuu6mxzdu25DJq16B2xTnrVR1ebejgya51YNg0GyE6Op0MAWuC0vfjb5ci7fIZlBvbqoi-ks8fm7vDx8L0XWEkYVR-kto-etFatRpVzpH2WalhmThGaT_U1sHfDJNBqf_5zU6AL8tU1O-IUT2YyAJ1Et2v_m871Uime36dB_bgBvq2sMRnjH7SNEpJT3eHVHWLqEPo8w; _uetsid=6ca18010fe1f11eebbfa9735aaf73326; _uetvid=a66b9290f28311ee8a89632888a7d930; _clsk=1ovx5qp%7C1713549790815%7C47%7C1%7Cf.clarity.ms%2Fcollect; CognitoIdentityServiceProvider.11idn2ot5orv6dm4f68lkrfu7d.LastAuthUser=4839b94f-d437-40a4-b692-0e4cd1db8838; CognitoIdentityServiceProvider.11idn2ot5orv6dm4f68lkrfu7d.4839b94f-d437-40a4-b692-0e4cd1db8838.accessToken=eyJraWQiOiIyRGpyOUpKcnljK1wvbDFYSWRHQzVDQVJzemJUbzhPNDlWU1puejh4Q2E0az0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0ODM5Yjk0Zi1kNDM3LTQwYTQtYjY5Mi0wZTRjZDFkYjg4MzgiLCJjb2duaXRvOmdyb3VwcyI6WyJsaXRlIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xXzFMQkJIUUI0biIsImNsaWVudF9pZCI6IjExaWRuMm90NW9ydjZkbTRmNjhsa3JmdTdkIiwiZXZlbnRfaWQiOiI0ZDRkZDAxYS1lM2YzLTRiNGEtODcxNi1mYjFjOWIzOTMyNzgiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNzEzNTM1NTczLCJleHAiOjE3MTM1NTMzOTAsImlhdCI6MTcxMzU0OTc5MCwianRpIjoiOTk2YTQwYTMtOGY5NS00N2RkLTk0NGQtMGUyMGE4YWMyMzg0IiwidXNlcm5hbWUiOiI0ODM5Yjk0Zi1kNDM3LTQwYTQtYjY5Mi0wZTRjZDFkYjg4MzgifQ.U7IdeKPMqBapaimxmrMF3dP389HZa3wVovwpor-rKlHaueb2zSwKWqGS2EeKeXWikjeBG8R2Ue_aOY5eNrq93U-VKcuTtwbEkF3PYM-25GWVieqgtPXzh5ip4lBxfObPhA-Iy4JLAfIsyFM11w16j1rJ7lANexywvB9zq32SRroFemvEKyAbH5sQnG3i8g6XnM-vY479FpGS43G5bfYA_u9Wo-OZHCOWWoQGGrG9rUJnhZtLbsDRT63fMi1g1LcDJy4UKJGyAUrVJPkyGWS-4cjj_7TAJMphaqj3EGBgeN6QydYtgEYtbf5uxhQXfFUTpZVf0j-ByraP7VgAZ3-iOg; CognitoIdentityServiceProvider.11idn2ot5orv6dm4f68lkrfu7d.4839b94f-d437-40a4-b692-0e4cd1db8838.idToken=eyJraWQiOiJHR0x5OHRHWktodkxlNmRmQUhTb3ZRQ01USkI0c0tjNnBWT21Ec3p3aEd3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0ODM5Yjk0Zi1kNDM3LTQwYTQtYjY5Mi0wZTRjZDFkYjg4MzgiLCJjb2duaXRvOmdyb3VwcyI6WyJsaXRlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnByZWZlcnJlZF9yb2xlIjoiYXJuOmF3czppYW06OjU5MzUwMzU2NjI4Njpyb2xlXC9ldS13ZXN0LTFfMUxCQkhRQjRuLWxpdGVHcm91cFJvbGUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMV8xTEJCSFFCNG4iLCJjb2duaXRvOnVzZXJuYW1lIjoiNDgzOWI5NGYtZDQzNy00MGE0LWI2OTItMGU0Y2QxZGI4ODM4IiwiZ2l2ZW5fbmFtZSI6ImxpenpvIiwiY29nbml0bzpyb2xlcyI6WyJhcm46YXdzOmlhbTo6NTkzNTAzNTY2Mjg2OnJvbGVcL2V1LXdlc3QtMV8xTEJCSFFCNG4tbGl0ZUdyb3VwUm9sZSJdLCJhdWQiOiIxMWlkbjJvdDVvcnY2ZG00ZjY4bGtyZnU3ZCIsImV2ZW50X2lkIjoiNGQ0ZGQwMWEtZTNmMy00YjRhLTg3MTYtZmIxYzliMzkzMjc4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MTM1MzU1NzMsImN1c3RvbTptdWx0aXBsaWVyIjoiMSIsImV4cCI6MTcxMzU1MzM5MCwiaWF0IjoxNzEzNTQ5NzkwLCJlbWFpbCI6ImxpenpvQGdtYWlsLmNvbSJ9.ghqbCjIuGON0SYdwjNpCzDs-w6-UuQwG9eVuiLlFFYB1YxJ16ZFhL3phwPmWKZpo6w_lLjt0CzB_kDr9wLCWcHc3vJCBoMQyN6PiJ0htH4tLQJAaPS4tbbgf2cH19bNURexjDg-F9AS7eDiyo0LpPNolmJTWUUyIYTyk0mEhilj52whue4_QLtAcjuSkGpuXoLwmWdjclo_ktZrSDQleaedTpaXZ_HGyPZCshYELEwCa126ri8LITqX0MMDIgjJ217teG0HtKiWpAVBGlUFcxYbj_7bbjNTjvTOg1U5I8nFLpFj-LybvTM08qeDpWzf14ny6RYZTYZqC7nYnRhIuXQ; CognitoIdentityServiceProvider.11idn2ot5orv6dm4f68lkrfu7d.4839b94f-d437-40a4-b692-0e4cd1db8838.refreshToken=eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.NdZui4tcO8P74ELWWhDgKDCfwaAe-QAvNNUCvfo1m5jEjHszCQrQp0mgZg_umFPq5iXKPyy30_iP5_bsmrcmrZnJv0R3YGiFPSyxKqHquNL97fCexmT1vM5MPM3YAqIJnCyV-tb5Lo_zuuV94oEMohZ44WO3Az3fHJ_W3wZSkJn2Xmx7QRNyX4RJMqgwgq7gU6PAES8cBDm_PPwP0xp17MDVcoftyM5eZMHH1VeBqv4LRtJYKUOsgtkAMxAS8xeX4CeS1T0KEPWV8gS-vvaEneV-K2EeXQuQjm-6Z01-Ey2-1boonCLv2C66bKXVQu-vhuCoW-LUnx814a240zafWQ.RjNHZfGnwNUFcNEM.--MYaaBJPUh08v7s_FEyG0EobF71ziAQvQBmGrx7GdUG7UMnR82x1GWG9EvMGnaNm5rhtGrfm4oGppNP4TIZ-Ne9vBXKYv7xJXR-iQTLg7-s4svWLmU9yklQN_EAM5CltDDl_xaedFBu6hqbbrwFfxF4itFq_5ALYy2v7kebjPw1xntKlG_a8o5PhvU0ZPvPOfBhfrCfvJdj8XKcRe63tt-N89OEjSMxMxI7LL0HAb80NeULaYOwiPkR5iQBg7FUakv_X3cX4qyz25Js8EYCGinmyJnGuAeR9U2beQGtZ3GLNItpeVidZ4cwgy42ecMINyMAM_FdMzXOSh6zCDW5ew_jmwSy8gp9_wBkM30kcKwYcGFtnKb9U-_ai_fepE1D8uZtz1yY-pCnuAFyaDzgnTD0dkuMIrJKoHOhaZixluVa4-fnD34LkRjQTV0ZqOiA96Hj9LAicgSV_5WKNdir7ms_Jql0xhcJ-LkSJcNm0A2T1EopqV3pBdEoAzgOUoGmnPnAqTCOYVaMFELxabI2U5nu6JxiyKtuj4MRD6wpms1AAWmvn8GdpO_Z00l7hPG1P1A6S5ei_E3arETqYENhCCXNPB4tp8PIPQs-AnuHryMMA2Q_BkHpIe-8JDqpF_ffSZtqom2qANHcW7hylULhba_kIOjXhTVlPqqZQHmTir04XlPfdelDQlU6uNK-f7G2P9ZltWrF-arCJyMbySKA0CwaqT4oDpz0O-OLYHZ--tkqNqVJ8FJXbWMPdCGNOFjbo6eZxhmh44rJ6tyukIr6PQ-EvS2pHpYyJGDeoJZeJzhbzJBuT5ujF-tqYII5KepINytZ_I893Upeo1kWEGiLkHPw_rov2t3XkcnGdfEnwZDQLUSWIeRETpshYmBoV6dE-415QsCB5R2hlUQZdkc4CcxqyR2-4QqBMkcRtINXma5x9WgAKy77FPiVk8M-T-DmzcDRSG0_DQ9BUbEWIqzXfUrXUd3XTqmwMFysc7mGJ93Yhef1OlnKMyPzQRlYVjBkWMqZJhqnyW0Avb-mT5WK3JywMJm_QJ1HvTzFh_XYHA6Qh41f68vNk4t-Pv7rJfNOrXORfCc6_pzMY6VZq1nifhrHAkK6BAVpPFdv4DEKtteqguReQDp_f4pIqmb6AXZJBZKQgNL4x9DYGCY0UuANzS4NDiID2J8-OG5WU6xc4saMYQ6PK3x5PK7YklyLzQaEk8HIWwQuWG2-10Ylp4eSz1n9qTCfO5KJgNJHdUL_WVZj4fzdwuPcSwpd-r_h1pfsoQAgraC4MX_ZPfnsoEF6HeUgcbh76d5EInmfmA0Ca6Bmdu4Cn1lWhhM5tA.OQUPXZSJZYZL3EWA0zg7yw; CognitoIdentityServiceProvider.11idn2ot5orv6dm4f68lkrfu7d.4839b94f-d437-40a4-b692-0e4cd1db8838.signInDetails={%22loginId%22:%22lizzo@gmail.com%22%2C%22authFlowType%22:%22USER_SRP_AUTH%22}; CognitoIdentityServiceProvider.11idn2ot5orv6dm4f68lkrfu7d.4839b94f-d437-40a4-b692-0e4cd1db8838.clockDrift=-881; _ga_N1FW4PGYTQ=GS1.1.1713540410.16.1.1713549875.60.0.0",
            "Referer": "https://app.minea.com/en/onboarding",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        JSON.stringify([boarding]),
        {
            method: "POST"
        }
    );

    debugLog(`${boarding} ran successfully.`);
    await new Promise(resolve => setTimeout(resolve, DELAY));
}

async function main() {
    await resetOnBoarding();
    debugLog("Field resetting...");

    for (const boarding of ALL_BOARDING)
        await collectBoarding(boarding);    
}

async function rateLimiting() {
    while (COUNTER < NUM_ITERATION) {
        await main();
        COUNTER++;

        await new Promise(resolve => setTimeout(resolve, DELAY));
    }

    console.log("Boardings done due to rate limiting. Restart it after a couple of seconds!");
}

rateLimiting();