import {resolve} from 'path'
import * as fs from 'fs'

const typingsPath = resolve(__dirname, './graphql-api/src/graphql.ts')
const destinationPath = resolve(__dirname, './client/src/graphql.ts')

fs.copyFile(typingsPath, destinationPath, fs.constants.COPYFILE_FICLONE, (err) => {
    if (!err) {
        console.log('typings have been copied to client...')
    }
})
