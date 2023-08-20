import { logout } from "../logout.js";
import localStorageMock from "../test/mock/mocklocalstorage.mock.js";

beforeAll(() => {
  global.localStorage = localStorageMock;
});

describe("logout", () => {
  it("deletes the token from the browser storage", () => {
    logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
  });
});
