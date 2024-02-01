import { SDKConfiguration } from "@atomic.io/action-cards-web-sdk";
import { Colours } from "../Colours";

export const configureContainer = (streamContainerId: string) => {
  const config: SDKConfiguration = {
    streamContainerId,
    // See the WebSDK documentation for more information on the implementation of this function https://documentation.atomic.io/sdks/web#runtime-variables
    onRuntimeVariablesRequested: (cards, callback): void => {
      cards.forEach(function (card): void {
        // Replace the name of the runtime variable with your own set in the Workbench and modify what you want the value to be.
        card.runtimeVariables.set(
          "test_variable",
          "If you see this, then it works! Yay!"
        );
      });

      // Call the supplied callback with your modified cards
      callback(cards);
    },
    // Customisation of the containers' UI. Other options can be found in the WebSDK documentation https://documentation.atomic.io/sdks/web#style-and-presentation
    enabledUiElements: {
      launcherButton: {
        disabled: false,
        backgroundColor: Colours.hotPink,
      },
    },
    // See the WebSDK documentation for available custom strings https://documentation.atomic.io/sdks/web#custom-strings
    customStrings: {
      cardListTitle: "Custom List Title",
    },
  };

  return config;
};
