/**
 * Google Sheets Integration Utility for Tekzen Technologies
 * Loaded securely via environment variable VITE_GOOGLE_SHEETS_SCRIPT_URL
 */

export const GOOGLE_SHEETS_SCRIPT_URL =
import.meta.env.VITE_GOOGLE_SHEETS_SCRIPT_URL;

export async function submitToGoogleSheets(data) {
  try {
    const now = new Date();
    const formattedTimestamp = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const formattedDate = now.toISOString().split("T")[0];

    // Build payload with comprehensive key aliases so any Google Sheet column header matches
    const payload = {
      ...data,
      timestamp: formattedTimestamp,
      Timestamp: formattedTimestamp,
      submittedDate: formattedDate,
      "Submitted Date": formattedDate,
      date: data.date || formattedDate,
      Date: data.Date || data.date || formattedDate,
    };

    await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting to Google Sheets script:", error);
    return { success: false, error };
  }
}
