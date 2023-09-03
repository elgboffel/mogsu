export type AppErrorType = {
	raw: string | null;
	url: string | null;
	isSuccess: boolean | null;
	message: ErrorMessage | null;
	statusCode: number | null;
};

export type ErrorMessage = {
	code: string | null;
	value: string | null;
};
