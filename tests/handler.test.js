const { expect } = require("chai");
const sinon = require("sinon");
const Meta = require("html-metadata-parser");
const { getMetadataFromUrl } = require("../src/handler");

describe("Test handler lambda", () => {
  beforeEach(() => {
    sinon.stub(Meta, "parser").resolves({
      key: "value", // just a mocked data for testing
    });
  });

  afterEach(() => {
    sinon.restore();
  });

  it("test with invalid payload in request and expect validation error in response", async () => {
    const event = {
      body: JSON.stringify({
        invalidKey: "invalid value",
        url: "incorrect url format",
      }),
    };
    const response = await getMetadataFromUrl(event);

    expect(response).to.have.property("statusCode", 400);
  });

  it("test with valid payload in request and expect validation success in response", async () => {
    const event = {
      body: JSON.stringify({
        url:
          "https://www.flipkart.com/health-personal-care-appliances/pr?sid=zlw&offer=nb:mp:016cd7c412&fm=neo%2Fmerchandising&iid=M_aee626cb-f729-4d83-af6a-a04383967abb_3.9KRQQF0C56NS&ssid=qpzyjitpyo0000001613461665795&otracker=hp_omu_Deals%2Bof%2Bthe%2BDay_3_3.dealCard.OMU_9KRQQF0C56NS_3&otracker1=hp_omu_SECTIONED_neo%2Fmerchandising_Deals%2Bof%2Bthe%2BDay_NA_dealCard_cc_3_NA_view-all_3&cid=9KRQQF0C56NS",
      }),
    };
    const response = await getMetadataFromUrl(event);

    expect(response).to.have.property("statusCode", 200);
  });
});
