import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://efea45ff921048648b65cc829a76511f@sentry.io/2351416"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
