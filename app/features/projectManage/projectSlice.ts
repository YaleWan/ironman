import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projects: [],
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});
export const { setProjects } = projectSlice.actions;

export default projectSlice.reducer;

export const selectProject = (state: RootState) => state.project.projects;
