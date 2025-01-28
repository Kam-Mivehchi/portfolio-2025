export type MetaData = {
  title: string;
  description: string | undefined;
  image: string | undefined;
  url: any;
};

interface ErrorResponse {
  error: string;
}

export type MetadataResponse = MetaData[] | ErrorResponse;
