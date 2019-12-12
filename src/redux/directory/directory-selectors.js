import  {createSelector} from 'reselect';


const selectDirectory = state => state.directory;

const selectDirectorySections = createSelector(
    selectDirectory,
    output => output.sections
)

export {selectDirectorySections};