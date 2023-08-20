import { login } from "../login.js";
import localStorageMock from "../test/mock/mocklocalstorage.mock.js";
import USER_DATA from "../test/mock/mockuser.mock.js";

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(USER_DATA),
});

describe("Login Functionality", () => {
  beforeAll(() => {
    global.localStorage = localStorageMock;
    global.fetch = mockFetchSuccess;
  });

  it("successfully returns user data upon login", async () => {
    const userData = await login({});
    expect(userData).toEqual(USER_DATA);
  });

  it("stores the access token in localStorage upon login", async () => {
    await login({});
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify(USER_DATA.accessToken),
    );
  });
});
