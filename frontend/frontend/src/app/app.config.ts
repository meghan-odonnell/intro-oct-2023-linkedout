import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideState, provideStore } from "@ngrx/store";
import { reducers } from "./state";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { CounterFeature } from "./state/counter";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authConfig } from "./auth.config";
import { authInterceptor, provideAuth } from "angular-auth-oidc-client";
import { provideEffects } from "@ngrx/effects";
import { CounterEffects } from "./state/counter.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAuth(authConfig),
    provideStore(reducers),
    provideStoreDevtools(),
    provideEffects([CounterEffects]),
    provideState(CounterFeature),
    provideHttpClient(withInterceptors([authInterceptor()])),
  ],
};
