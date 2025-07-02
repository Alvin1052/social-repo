export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  // atau gunakan NextRequest jika pakai next/server
}
