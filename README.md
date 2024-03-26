## RSS Feed Reader Plugin

##Build

`npm run build`

##Test

`extism call plugin.wasm run --input="https://bitcoinnews.com/feed/" --wasi --allow-host="*" --log-level=info`

The `--log-level=info` param is used to show up console.logs in the output.

`--allow-host="*"` tells Extism tell that it's okay to call the given URL.

The `--wasi` param is currently needed in every Extism call.