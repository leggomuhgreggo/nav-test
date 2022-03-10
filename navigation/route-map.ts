import { NavigatorScreenParams } from "@react-navigation/native";

export const TAB_SCREENS = {
  Home: { path: "", screens: HOME_SCREENS },
  Order: {},
  // Order: { path: '' },
  Challenges: {},
  Account: { path: "account/:route?" },
  NotFound: { path: "*" }, // 404
} as const;

export const HOME_SCREENS = {};
export const ACCOUNT_SCREENS = {};
export const ORDER_SCREENS = {};
export const CHALLENGES_SCREENS = {};

export const ROUTES = {
  Home: { path: "" },
  Account: { path: "account/:route?" },
  Menu: { path: ":restaurantSlug/menu" },
  DeliveryMenu: { path: "delivery/:addressId/menu" },
  DeliveryProductDetails: { path: "delivery/:addressId/:productSlug" },
  DeliveryEditProductDetails: {
    path: "delivery/:addressId/:productSlug/edit/:lineItemId?",
  },
  ProductDetails: { path: ":restaurantSlug/:productSlug" },
  EditProductDetails: {
    path: ":restaurantSlug/:productSlug/edit/:lineItemId?",
  },
  Collections: { path: ":restaurantSlug/collections/:uuid" },
  Checkout: { path: "checkout" },
  Location: { path: "location/:type?" },
  Login: { path: "login" },
  Join: { path: "join" },
  ForgotPassword: { path: "forgot-password" },
  JoinVerification: { path: "register/verify" },
  ConfirmAddress: { path: "confirm-address" },
  AddOns: { path: "add-ons" },
  OrderStatus: { path: "order-status/:orderId" },
  History: { path: "history/:orderId" },
  FeedbackOrderFeedback: { path: "feedback/:order_id" },
  DataManagement: { path: "data-management" },
  Gift: { path: "gift" },
  Rewards: { path: "rewards" },
  NotFound: { path: "*" }, // 404
} as const;

// ────────────────────────────────────────────────────────────────────────────────

/**
 * # TS: AppStackParamList
 *
 * These are the type definitions for the AppNavigator. For static routes the entry is just typed as undefined -- however slugs/params are explicitly typed.
 * NOTE: currently all the slug/param defs are followed by an undefined, but that will likely change.
 */
export type AppStackParamList = {
  readonly Home: undefined;
  readonly Account: { readonly route: AccountScreenRoute };
  readonly Menu: { readonly restaurantSlug: string };
  readonly DeliveryMenu: { readonly addressId: string };
  readonly DeliveryProductDetails: {
    readonly addressId: string;
    readonly productSlug: string;
    readonly lineItemId?: string;
  };
  readonly DeliveryEditProductDetails: {
    readonly addressId: string;
    readonly productSlug: string;
    readonly lineItemId?: string;
  };
  readonly ProductDetails: {
    readonly restaurantSlug: string;
    readonly productSlug: string;
    readonly lineItemId?: string;
  };
  readonly EditProductDetails: {
    readonly restaurantSlug: string;
    readonly productSlug: string;
    readonly lineItemId?: string;
  };
  readonly Collections:
    | {
        readonly restaurantSlug: string;
        readonly uuid: string;
      }
    | undefined;
  readonly Checkout: undefined;
  readonly Location: { readonly type?: string };
  readonly Login: undefined;
  readonly Join: undefined;
  readonly ForgotPassword: undefined;
  readonly JoinVerification:
    | { readonly email?: string; readonly token?: string }
    | undefined;
  readonly ConfirmAddress: undefined;
  readonly AddOns: undefined;
  readonly OrderStatus: { readonly orderId: string } | undefined;
  readonly History: { readonly orderId: string } | undefined;
  readonly FeedbackOrderFeedback: { readonly orderId: string } | undefined;
  readonly DataManagement: undefined;
  readonly Gift: undefined;
  readonly NotFound: undefined;
  readonly Rewards: undefined;
};

// ────────────────────────────────────────────────────────────────────────────────

// TS: Helper type for getting route names.
export type RouteNames = keyof typeof ROUTES;

// ────────────────────────────────────────────────────────────────────────────────

/**
 * # TS: RootNavParamList
 *
 * This is the primary type export and powers the TS for essentially our entire
 * usage of the React Navigation toolchain. The way the library accomplishes
 * this is by being very strict about types, so be mindful of type related
 * changes.
 *
 * The TS defs get registered in this file: apps/order/src/@types/react-navigation.d.ts
 */
export type RootNavParamList = {
  readonly Main: NavigatorScreenParams<AppStackParamList>;
};

// ────────────────────────────────────────────────────────────────────────────────

/**
 * Nested Routes query param options
 */
export enum AccountScreenRoute {
  Options = "options",
  Profile = "profile",
  PaymentCredit = "payment-credit",
  Addresses = "addresses",
  OrdersFavorites = "orders-favorites",
  ReferFriend = "refer-friend",
  DietaryRestrictions = "dietary-restrictions",
  SignOut = "sign-out",
}
