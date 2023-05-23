import { create } from "zustand";

type ActualTimeType = "focus" | "short_break" | "long_break";

export interface ClockStore {
  focus: number;
  short_break: number;
  long_break: number;
  rounds: number;
  current_time: ActualTimeType;
  current_round: number;
  isDarkMode: boolean;
  isAutoStart: boolean;
  isNotification: boolean;
  sessions_completed: number;
}
export interface ClockStoreActions {
  setFocus: (focus: number) => void;
  setShortBreak: (short_break: number) => void;
  setLongBreak: (long_break: number) => void;
  setRounds: (rounds: number) => void;
  setIsDarkMode: (isDarkMode: boolean) => void;
  setIsAutoStart: (isAutoStart: boolean) => void;
  setIsNotification: (isNotification: boolean) => void;
  getRemainingTime: () => Record<ActualTimeType, number>;
  setNextRound: () => void;
  resetSessions: () => void;
}

export const initialState: ClockStore = {
  focus: 25,
  short_break: 5,
  long_break: 15,
  rounds: 4,
  current_time: "focus",
  current_round: 1,
  isDarkMode: false,
  isAutoStart: false,
  isNotification: true,
  sessions_completed: 0,
};

export const useClockStore = create<ClockStore & ClockStoreActions>(
  (set, get) => ({
    ...initialState,
    setFocus: (focus: number) => set({ focus }),
    setShortBreak: (short_break: number) => set({ short_break }),
    setLongBreak: (long_break: number) => set({ long_break }),
    setRounds: (rounds: number) => set({ rounds }),
    setIsDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
    setIsAutoStart: (isAutoStart: boolean) => set({ isAutoStart }),
    setIsNotification: (isNotification: boolean) => set({ isNotification }),
    getRemainingTime: () => {
      
      const mapping: Record<ActualTimeType, number> = {
        focus: get().focus * 60,
        short_break: get().short_break * 60,
        long_break: get().long_break * 60,
      };
      return mapping;
    },
    setNextRound: () =>
      set((state) => {
        const actualRound = state.current_time;
        const mappingTime: Record<ActualTimeType, ActualTimeType> = {
          focus:
            state.current_round + 1 <= state.rounds
              ? "short_break"
              : "long_break",
          short_break: "focus",
          long_break: "focus",
        };

        const nextRound = mappingTime[actualRound];
        const current_round =
          nextRound === "focus" ? state.current_round + 1 : state.current_round;
        if (current_round > state.rounds) {
          return {
            current_time: nextRound,
            current_round: 1,
            sessions_completed: state.sessions_completed + 1,
          };
        }

        return {
          current_time: nextRound,
          current_round,
        };
      }),
    resetSessions: () =>
      set(() => {
        return {
          current_time: "focus",
          current_round: 1,
        };
      }),
  })
);
