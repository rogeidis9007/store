export default interface ApiResponseDTO<T> {
    success?: boolean;
    message: string;
    data?: T;
}
  