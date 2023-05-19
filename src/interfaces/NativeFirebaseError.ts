export default interface NativeFirebaseError {
  code: string;
  message: string;
  namespace: string;
  userInfo: {
    code: string;
    message: string;
  };
}
