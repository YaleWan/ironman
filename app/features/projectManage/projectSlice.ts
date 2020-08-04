import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projects: [],
    workspace: '',
  },
  reducers: {
    setProjects: (state, action) => {
      console.log('111', 111);
      state.projects = action.payload;
    },
    setWorkspace: (state, action) => {
      console.log('111', 111);
      state.workspace = action.payload;
    },
  },
});
export const { setProjects, setWorkspace } = projectSlice.actions;

export default projectSlice.reducer;

export const selectProject = (state: RootState) => state.project.projects;
export const selectWorkspace = (state: RootState) => state.project.workspace;
